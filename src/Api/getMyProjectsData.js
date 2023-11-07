import axiosInstance from './axiosInstance';
import Swal from 'sweetalert2';

const userData = JSON.parse(localStorage.getItem('userData'));

const getMyProjectsData = async () => {
  try {
    const response = await axiosInstance.get(
      `http://localhost:5000/submitted-projects/${userData.email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
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

export default getMyProjectsData;
