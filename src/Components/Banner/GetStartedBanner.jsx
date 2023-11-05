import PropTypes from 'prop-types';
import GlassButton from '../../ReuseableUI/GlassButton/GlassButton';

const GetStartedBanner = ({ title = '', children }) => {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-4 py-16 gradient-bg text-center gradient-anim'>
      <h3 className='lg:text-7xl text-4xl font-semibold text-white max-w-5xl'>
        {title}
      </h3>
      <GlassButton text='Join Now' />
      {children}
    </div>
  );
};

GetStartedBanner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default GetStartedBanner;
