import axiosInstance from './axiosInstance';

// Retrieve errorCount from localStorage or default to 0
let errorCount = parseInt(localStorage.getItem('errorCount')) || 0;

const userData = JSON.parse(localStorage.getItem('userData'));

const getMyCreatedProjectsData = async () => {
  try {
    const response = await axiosInstance.get(
      `/my-created-project/${userData.email}`
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

export default getMyCreatedProjectsData;
