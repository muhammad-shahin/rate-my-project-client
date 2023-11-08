import axiosInstance from './axiosInstance';
import Swal from 'sweetalert2';

const userData = JSON.parse(localStorage.getItem('userData'));

const getPendingSubmit = async () => {
  try {
    const response = await axiosInstance.get(
      `/pending-submit/${userData.email}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Failed To Load Pending Submitted Porjects Data! Try Again',
      showConfirmButton: false,
      timer: 1500,
    });
    return null;
  }
};

export default getPendingSubmit;
