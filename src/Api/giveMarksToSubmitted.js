import axiosInstance from './axiosInstance';
import Swal from 'sweetalert2';

const giveMarksToSubmitted = async (submittedId, updatedData) => {
  try {
    const response = await axiosInstance.put(
      `/pending-submit/${submittedId}`,
      updatedData
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

export default giveMarksToSubmitted;
