/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
const CountAnimation = ({
  number,
  delay = 1000,
  onScroll = false,
  style,
  afterText,
  beforeText,
  children,
}) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef();
  const observer = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Change this threshold as per your requirements
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountAnimation();
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);
    observer.current.observe(containerRef.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const startCountAnimation = () => {
    let start = 0;
    const step = number / (delay / 16); // Assuming 60fps

    const animationInterval = setInterval(() => {
      if (start < number) {
        setCount(Math.ceil(start));
        start += step;
      } else {
        setCount(number);
        clearInterval(animationInterval);
      }
    }, 16);
  };

  return (
    <div
      ref={containerRef}
      className={style}
    >
      <p>
        {beforeText}
        {count}
        {afterText}
      </p>
      <div>{children}</div>
    </div>
  );
};
CountAnimation.propTypes = {
  number: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
  onScroll: PropTypes.bool,
  style: PropTypes.string,
  afterText: PropTypes.string,
  beforeText: PropTypes.string,
  children: PropTypes.node,
};
export default CountAnimation;
