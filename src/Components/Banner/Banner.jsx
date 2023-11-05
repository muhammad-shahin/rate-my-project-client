import GlassButton from '../../ReuseableUI/GlassButton/GlassButton';
import OutlineButton from '../../ReuseableUI/OutlineButton/OutlineButton';
import Lottie from 'lottie-react';
import bannerAnim from '../../assets/Animation/banner-animation.json';
const Banner = () => {
  return (
    <section className='rounded-lg xl:px-[8%] xl:py-20 px-[5%] py-10 bg-primary backdrop-blur-xl bg-opacity-[0.75] flex-bet'>
      {/* left side */}
      <div className='capitalize text-white space-y-6'>
        <h1 className='font-semibold text-2xl w-full lg:text-6xl lg:w-3xl'>
          Unlock Your Academic Potential: Transform Your Study Experience with
          Collaborative Learning
        </h1>
        <p className='font-semibold lg:text-base text-sm lg:max-w-3xl text-slate-600'>
          Join our online group study community and experience a new way to
          excel in your studies. Collaborate with friends, create assignments,
          and achieve academic success, all in one place.
        </p>
        <div className='flexme '>
          <GlassButton text='Get Started' />
          <OutlineButton text='Learn More' />
        </div>
      </div>

      {/* right side */}
      <div className='hidden lg:block'>
        <Lottie
          loop
          animationData={bannerAnim}
        />
      </div>
    </section>
  );
};

export default Banner;
