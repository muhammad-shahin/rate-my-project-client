import './OverlapImage.css';

const OverlapImage = () => {
  return (
    <div className='flex-bet xl:flex-row flex-col gap-6'>
      {/* left */}
      <div className='space-y-4 px-[5%] xl:px-0'>
        <h1 className='text-primary text-3xl xl:text-7xl font-semibold xl:max-w-4xl w-full text-center xl:text-left xl:mx-0 mx-auto'>
          Improving Your Startegies, Growing Your Skill
        </h1>
        <p className='w-full max-w-2xl font-medium text-lg xl:mx-0 mx-auto'>
          This comprehensive guide is designed to help you take your abilities
          to the next level. Learn how to refine your strategies and expand your
          skill set, unlocking new opportunities for personal and professional
          growth. Explore proven techniques and insights that will empower you
          to reach new heights in your endeavors.
        </p>
      </div>

      {/* right side */}
      <div className='relative xl:scale-[1]'>
        <img
          src='https://i.ibb.co/qy10jf6/flipcard1.jpg'
          loading='lazy'
          className='rounded-xl w-[550px] ml-auto border-4'
        />
        <div className='borderHelper'>
          <div className='rounded-xl border-[15px] border-white bg-transparent'>
            <img
              src='https://i.ibb.co/1QDRKyT/flipcard2.jpg'
              loading='lazy'
              className='rounded-xl object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlapImage;
