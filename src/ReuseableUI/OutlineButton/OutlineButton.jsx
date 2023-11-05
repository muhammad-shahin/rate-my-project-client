import PropTypes from 'prop-types';

const OutlineButton = ({ text, icon, handleOnClick }) => {
  return (
    <>
      <button
        className='lg:px-5 lg:py-2 px-3 py-1 rounded-full hover:bg-tertiary backdrop-blur-[25px] font-medium lg:text-[18px] text-white uppercase lg:border-[3px] border-2 hover:border-transparent bg-transparent hover:text-white border-white duration-500 flex justify-center items-center gap-4 w-fit'
        onClick={handleOnClick}
      >
        {text}
        {icon}
      </button>
    </>
  );
};

OutlineButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  handleOnClick: PropTypes.func,
};

export default OutlineButton;
