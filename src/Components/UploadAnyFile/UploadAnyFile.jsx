import { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { BsUpload } from 'react-icons/bs';
import { storage } from '../../Configs/firebase.config';
import PropTypes from 'prop-types';

const UploadAnyFile = ({
  label,
  handleChange,
  isRequired,
  setFileSuccess,
  fileSuccess,
}) => {
  const [error, setError] = useState(null);
  const [disableUpload, setDisableUpload] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size exceeds 5MB limit');
      } else {
        handleFileUpload(selectedFile, selectedFile.name);
      }
    }
  };

  const handleFileUpload = (file, name) => {
    if (!file) return;
    setError(null);
    setFileSuccess(`Uploading... ${name}. Please Wait`);
    setDisableUpload(true); // Disable the label during the upload
    const randomNumber = Math.floor(Math.random() * 100);
    const fileRef = ref(storage, `RMP/ProjectFile/${randomNumber}${name}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          setFileSuccess(`${name} Upload successful.`);
          setDisableUpload(false);
          handleChange(url);
        })
        .catch((error) => {
          setError(error.message);
          setFileSuccess(null);
          setDisableUpload(false);
        });
    });
  };

  return (
    <div>
      <p className='text-[14px] font-medium pb-2'>
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </p>
      <label
        className={`w-full bg-[#d0eafa] rounded-lg min-h-[150px] flex justify-center items-center cursor-pointer relative ${
          disableUpload ? 'pointer-events-none' : '' // Disable pointer events when uploading
        }`}
        htmlFor='projectFile'
      >
        <BsUpload className='text-7xl text-[#565656] cursor-pointer' />
        <input
          type='file'
          id='projectFile'
          className='scale-0 absolute'
          onChange={handleFileChange}
        />
      </label>
      {fileSuccess && (
        <p className='text-[14px] text-green-600 text-center mt-2 max-w-[300px] mx-auto'>
          {fileSuccess}
        </p>
      )}
      {error && (
        <p className='text-[12px] text-red-600 text-center mt-2 max-w-[300px] mx-auto'>
          {error}
        </p>
      )}
    </div>
  );
};

UploadAnyFile.propTypes = {
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  setFileSuccess: PropTypes.func,
  fileSuccess: PropTypes.string,
};

export default UploadAnyFile;
