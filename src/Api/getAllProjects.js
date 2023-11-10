import axiosInstance from './axiosInstance';

let errorCount = parseInt(localStorage.getItem('errorCount')) || 0;

const getAllProjects = async (currentPage) => {
  try {
    const response = await axiosInstance.get(`/projects?page=${currentPage}`);
    // Reset errorCount on successful response
    errorCount = 0;
    return response.data;
  } catch (error) {
    // Check for userData and limit errorCount to 2
    if (errorCount <= 2) {
      errorCount += 1;
      localStorage.setItem('errorCount', errorCount.toString());
      window.location.reload();
    }
    console.log(error);
    return [];
  }
};

export default getAllProjects;