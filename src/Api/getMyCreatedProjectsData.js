import axiosInstance from './axiosInstance';
import Swal from 'sweetalert2';

const userData = JSON.parse(localStorage.getItem('userData'));

const getMyCreatedProjectsData = async () => {
  try {
    const response = await axiosInstance.get(
      `/my-created-project/${userData.email}`
    );
    return response.data || []; // Ensure it returns an array or an empty array on failure
  } catch (error) {
    console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Failed To Load My Created Projects Data! Try Again',
      showConfirmButton: false,
      timer: 1500,
    });
    return [];
  }
};

export default getMyCreatedProjectsData;
