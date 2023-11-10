import axiosInstance from './axiosInstance';

const createToken = (uid) => {
  axiosInstance
    .post('/jwt', { userId: uid })
    .then((res) => {
      console.log('Create token success', res);
    })
    .catch((error) => console.log('Create token Error', error.message));
};

export default createToken;
