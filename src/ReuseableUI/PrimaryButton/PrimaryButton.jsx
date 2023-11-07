import PropTypes from 'prop-types';

const PrimaryButton = ({ text, icon, handleOnClick, type }) => {
  return (
    <>
      <button
        className='lg:px-5 lg:py-2 px-3 py-1 rounded-full font-medium md:text-[16px] text-[12px] text-white uppercase lg:border-[3px] border-2 border-transparent hover:bg-primary duration-500 flex justify-center items-center gap-2 gradient-btn'
        onClick={handleOnClick}
        type={type}
      >
        {text}
        {icon}
      </button>
    </>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.node,
  handleOnClick: PropTypes.func,
};

export default PrimaryButton;
