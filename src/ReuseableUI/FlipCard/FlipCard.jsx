import { useState } from 'react';
import { motion } from 'framer-motion';
import './FlipCard.css';

const FlipCard = () => {
  const image1 = 'https://i.ibb.co/g7Qgfg1/slider-image-4.jpg';
  const image2 = 'https://i.ibb.co/482GWxr/slider-image-2.jpg';
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
        className='flip-card w-[600px] h-[360px] rounded-md'
        onClick={handleFlip}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className='flip-card-inner w-[100%] h-[100%]'
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.5, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
            style={{ backgroundImage: `url(${image1})` }}
          >
            <h1 className='text-2xl font-bold'>Hello JI</h1>
            <p className=''>Hello JI Aa Gaya amin</p>
          </div>
          <div
            className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'
            style={{ backgroundImage: `url(${image2})` }}
          >
            <h1 className='text-2xl font-bold'>Hello JI</h1>
            <p className=''>Hello JI Aa Gaya amin</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipCard;
