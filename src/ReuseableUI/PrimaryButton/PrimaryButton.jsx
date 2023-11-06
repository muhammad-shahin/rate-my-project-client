import PropTypes from 'prop-types';

const PrimaryButton = ({ text, icon, handleOnClick }) => {
  return (
    <>
      <button
        className='lg:px-5 lg:py-2 px-3 py-1 rounded-full backdrop-blur-[25px] font-medium md:text-[18px] text-[12px] text-white uppercase lg:border-[3px] border-2 border-transparent hover:bg-primary duration-500 flex justify-center items-center gap-2 gradient-btn'
        onClick={handleOnClick}
      >
        {text}
        {icon}
      </button>
    </>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  handleOnClick: PropTypes.func,
};

export default PrimaryButton;
