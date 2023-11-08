import axiosInstance from './axiosInstance';
import Swal from 'sweetalert2';

const getAllProjects = async (currentPage) => {
  try {
    const response = await axiosInstance.get(`/projects?page=${currentPage}`);
    return response.data;
  } catch (error) {
    console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Failed To Load My Porjects Data! Try Again',
      showConfirmButton: false,
      timer: 1500,
    });
    return null;
  }
};

export default getAllProjects;
