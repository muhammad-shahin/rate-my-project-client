import PropTypes from 'prop-types';

const GlassButton = ({ text, icon, handleOnClick }) => {
  return (
    <>
      <button
        className='lg:px-5 lg:py-2 px-3 py-1 rounded-full bg-tertiary backdrop-blur-[25px] font-medium md:text-[18px] text-[12px] text-white uppercase lg:border-[3px] border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white border-primary duration-500 flex justify-center items-center gap-4 '
        onClick={handleOnClick}
      >
        {text}
        {icon}
      </button>
    </>
  );
};

GlassButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.node,
  handleOnClick: PropTypes.func,
};

export default GlassButton;
