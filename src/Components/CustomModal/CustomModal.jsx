import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FcInfo } from 'react-icons/fc';

const CustomModal = ({
  modalStatus,
  title,
  message,
  setCustomModalStatus,
  children,
}) => {
  const customModal = useRef(null);

  useEffect(() => {
    if (modalStatus) {
      customModal.current.showModal();
    } else {
      customModal.current.close();
    }
  }, [modalStatus]);

  return (
    <dialog
      open
      id='custommodal'
      ref={customModal}
      className='sticky top-0 left-0 w-full h-full bg-transparent'
    >
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit bg-white rounded-lg'>
          <FcInfo className='relative mx-auto -top-8 w-[48px] text-[68px]' />
          <div className='p-5 text-center space-y-4'>
            <h2 className='text-3xl'>{title}</h2>
            <p className='font-normal text-[18px] max-w-[350px] capitalize'>
              {message}
            </p>
            {children}
          </div>
          <button
            onClick={() => {
              setCustomModalStatus(false);
            }}
            className='text-center bg-primary text-white text-xl w-full py-2 hover:bg-rose-500 transition-all rounded-b-lg'
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

CustomModal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  setCustomModalStatus: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default CustomModal;
