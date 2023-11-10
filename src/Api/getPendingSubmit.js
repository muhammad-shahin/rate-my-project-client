import axiosInstance from './axiosInstance';

let errorCount = parseInt(localStorage.getItem('errorCount')) || 0;
const userData = JSON.parse(localStorage.getItem('userData'));

const getPendingSubmit = async () => {
  try {
    const response = await axiosInstance.get(
      `/pending-submit/${userData.email}`
    );
    // Reset errorCount on successful response
    errorCount = 0;
    return response.data;
  } catch (error) {
    // Check for userData and limit errorCount to 2
    if (userData === null && errorCount <= 2) {
      errorCount += 1;
      localStorage.setItem('errorCount', errorCount.toString());
      window.location.reload();
    }
    console.log(error);
    return [];
  }
};

export default getPendingSubmit;
