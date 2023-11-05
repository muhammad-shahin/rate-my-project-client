import CountAnimation from '../../ReuseableUI/CountAnimation/CountAnimation';

const PerformanceCount = () => {
  return (
    <div className='flex-cen space-x-4'>
      <CountAnimation
        number={4}
        delay={1000}
        onScroll={false}
        beforeText='+'
        afterText='M'
        style='text-center gradient-text md:text-7xl text-4xl font-bold w-fit'
      >
        <div>
          <p className='md:text-lg text-[12px] text-center capitalize'>
            community members
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={19}
        delay={1000}
        onScroll={false}
        beforeText='+'
        afterText='M'
        style='text-center gradient-text md:text-7xl text-4xl font-bold w-fit'
      >
        <div>
          <p className='md:text-lg text-[12px] text-center capitalize '>
            study sessions
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={4}
        delay={1000}
        onScroll={false}
        beforeText='+'
        afterText='M'
        style='text-center gradient-text md:text-7xl text-4xl font-bold w-fit'
      >
        <div>
          <p className='md:text-lg text-[12px] text-center capitalize '>
            study goal reached
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={215}
        delay={2000}
        onScroll={false}
        beforeText='+'
        style='text-center gradient-text md:text-7xl text-4xl font-bold w-fit'
      >
        <div>
          <p className='md:text-lg text-[12px] text-center capitalize '>
            countries
          </p>
        </div>
      </CountAnimation>
      <CountAnimation
        number={4.8}
        delay={2000}
        onScroll={false}
        beforeText='+'
        afterText='/5'
        style='text-center gradient-text md:text-7xl text-4xl font-bold w-fit'
      >
        <div>
          <p className='md:text-lg text-[12px] text-center capitalize '>
            positive reviews
          </p>
        </div>
      </CountAnimation>
    </div>
  );
};

export default PerformanceCount;
