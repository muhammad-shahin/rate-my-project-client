import axiosInstance from './axiosInstance';
import Swal from 'sweetalert2';

const getProjectById = async (projectId) => {
  try {
    const response = await axiosInstance.get(`/project/${projectId}`);
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

export default getProjectById;
