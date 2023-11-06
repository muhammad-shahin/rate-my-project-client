/* eslint-disable react-hooks/exhaustive-deps */
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { storage } from '../../Configs/firebase.config';

const FileUpload = ({ name, label, handleChange, isRequired, message }) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [disableUpload, setDisableUpload] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [event, setEvent] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setEvent(e);
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
      } else {
        handleImageUpload(selectedFile, selectedFile.name);
      }
    }
  };

  //   handle Image Upload
  const handleImageUpload = (file, name) => {
    if (!file) return;
    setError(null);
    setSuccess(`Uploading... ${name} Please Wait`);
    setDisableUpload(false);
    const randomNumber = Math.floor(Math.random() * 100);
    const imageRef = ref(storage, `RMP/profilePictures/${randomNumber}${name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          setSuccess(`Uploaded Successfully. Continue to Next Step`);
          setDisableUpload(false);
          setUploadedImageUrl(url);
        })
        .catch((error) => {
          setError(error.message);
          setSuccess(null);
          setDisableUpload(false);
        });
    });
  };
  useEffect(() => {
    if (event && uploadedImageUrl) {
      handleChange(event, uploadedImageUrl);
    }
  }, [uploadedImageUrl, event]);

  return (
    <div className='flex flex-col justify-start items-start gap-2 w-full'>
      <p className='text-[14px] font-medium'>
        {label}{' '}
        {label && isRequired && (
          <span className='text-red-600 text-[18px]'>*</span>
        )}{' '}
      </p>
      <label
        htmlFor='fileInput'
        className={`w-full border-dashed border-2 bg-transparent lg:px-4 px-2 py-2 rounded-md cursor-pointer border-gray block text-center text-[14px] md:text-[18px]`}
      >
        {label}
      </label>
      <input
        type='file'
        id='fileInput'
        name={name}
        className='scale-0 absolute'
        accept='image/*'
        onChange={handleFileChange}
        required={isRequired}
        disabled={disableUpload}
      />
      {success && (
        <p className=' text-green-600 text-[14px] text-center w-fit mx-auto'>
          {success}
        </p>
      )}
      {error && <p className='text-[12px] text-red-600 text-center'>{error}</p>}
      {message && (
        <p className='text-[14px] font-medium text-purple mt-1'>{message}</p>
      )}
    </div>
  );
};
FileUpload.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
};

export default FileUpload;
