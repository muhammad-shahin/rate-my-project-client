import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './FlipCard.css';
import {
  FaUsers,
  FaTasks,
  FaChalkboardTeacher,
  FaPlayCircle,
  FaUser,
  FaMedal,
  FaMobileAlt,
  FaUserFriends,
  FaComments,
  FaFileAlt,
  FaIdCard,
  FaChartBar,
  FaDesktop,
  FaGlobe,
} from 'react-icons/fa';

const FlipCard = ({ cardData }) => {
  const iconMapping = {
    FaUsers: (
      <FaUsers className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaTasks: (
      <FaTasks className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaChalkboardTeacher: (
      <FaChalkboardTeacher className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaPlayCircle: (
      <FaPlayCircle className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaUser: (
      <FaUser className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaMedal: (
      <FaMedal className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaMobileAlt: (
      <FaMobileAlt className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaUserFriends: (
      <FaUserFriends className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaComments: (
      <FaComments className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaFileAlt: (
      <FaFileAlt className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaIdCard: (
      <FaIdCard className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaChartBar: (
      <FaChartBar className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaDesktop: (
      <FaDesktop className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
    FaGlobe: (
      <FaGlobe className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white' />
    ),
  };

  const {
    frontTitle,
    backImage,
    frontImage,
    backIcon,
    backDescription,
    backTitle,
    frontIcon,
    frontDescription,
  } = cardData;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };
  const handleMouseEnter = () => {
    if (!isFlipped) {
      setIsFlipped(true);
      setIsAnimating(true);
    }
  };

  const handleMouseLeave = () => {
    if (isFlipped) {
      setIsFlipped(false);
      setIsAnimating(true);
    }
  };
  return (
    <div className='flex-cen'>
      <div
        className='flip-card lg:w-[450px] xl:w-[600px] w-[320px] lg:h-[360px] h-[250px] rounded-md'
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className='flip-card-inner'
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.5, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {/* fron part of card */}
          <div
            className='flip-card-front bg-cover rounded-lg border-4 border-primary cursor-pointer'
            style={{ backgroundImage: `url(${frontImage})` }}
          >
            <div className='h-full w-full rounded-lg'>
              <div className='w-[100%] h-[100%] bg-cover rounded-lg p-5 relative'>
                {/* overlay */}
                <div className='gradient-bg-overlay w-full h-full absolute top-0 left-0 rounded-lg'></div>
                {/* content */}
                <div className='relative flex justify-center items-center flex-col gap-3 h-full'>
                  <div className='round-bg mx-auto w-fit'>
                    {iconMapping[frontIcon]}
                  </div>
                  <h2 className='md:text-3xl text-xl font-semibold duration-500 w-fit mx-auto gradient-text'>
                    {frontTitle}
                  </h2>
                  <p className='md:text-md text-sm  md:font-medium max-w-sm text-white duration-500 mx-auto text-center'>
                    {frontDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* back part of card */}
          <div
            className='flip-card-back bg-cover border-4 border-primary cursor-pointer text-white rounded-lg'
            style={{ backgroundImage: `url(${backImage})` }}
          >
            <div className='h-full w-full rounded-lg'>
              <div className='w-[100%] h-[100%] bg-cover rounded-lg p-5 relative'>
                {/* overlay */}
                <div className='gradient-bg-overlay w-full h-full absolute top-0 left-0 rounded-lg'></div>
                {/* content */}
                <div className='relative flex justify-center items-center flex-col gap-3 h-full'>
                  <div className='round-bg mx-auto w-fit'>
                    {iconMapping[backIcon]}
                  </div>
                  <h2 className='md:text-3xl text-xl font-semibold duration-500 w-fit mx-auto gradient-text'>
                    {backTitle}
                  </h2>
                  <p className='md:text-md text-sm  md:font-medium max-w-sm text-white duration-500 mx-auto text-center'>
                    {backDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
FlipCard.propTypes = {
  cardData: PropTypes.object,
};
export default FlipCard;
