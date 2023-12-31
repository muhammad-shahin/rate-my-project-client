import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { auth } from '../Configs/firebase.config';

const userData = JSON.parse(localStorage.getItem('userData'));
const secureAxios = axios.create({
  baseURL: 'https://rate-my-project-server.vercel.app',
  withCredentials: true,
});

const useAxios = (navigate) => {
  useEffect(() => {
    secureAxios.interceptors.request.use((config) => {
      // Add user UID as a query parameter to every request
      config.params = { ...config.params, userId: userData?.uid };
      return config;
    });
    secureAxios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log(
          'Axios interceptors error status code: ',
          error.request.status
        );
        if (error.request.status === 401 || error.request.status === 403) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Season Expired',
            text: `Please login again. Your season has been expired.`,
            showConfirmButton: false,
            timer: 2500,
          });
          setTimeout(() => {
            signOut(auth)
              .then(() => {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Successfully Logout',
                  showConfirmButton: false,
                  timer: 2000,
                });
                navigate('/login');
              })
              .catch((error) => {
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: `Failed To Logout. Please Try Again. ${error.message}`,
                  showConfirmButton: false,
                  timer: 3500,
                });
              });
          }, 2500);
        }
      }
    );
  }, []);

  return secureAxios;
};

export default useAxios;
