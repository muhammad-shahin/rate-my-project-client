import PropTypes from 'prop-types';

const Heading = ({ title, subTitle, titleColor }) => {
  return (
    <div className='py-10 gradient-text flex justify-center items-center flex-col gradient-text'>
      <h1
        className={`title-bar md:text-[48px] text-[20px] uppercase text-center font-bold`}
      >
        {title}
      </h1>
      <p
        className='md:text-[22px] text-[14px] uppercase text-center'
      >
        {subTitle}
      </p>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleColor: PropTypes.bool,
};

export default Heading;
