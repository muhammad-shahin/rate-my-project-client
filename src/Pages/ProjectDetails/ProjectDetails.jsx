import { AiOutlineFrown, AiOutlinePlus } from 'react-icons/ai';
import { SlCalender, SlActionRedo } from 'react-icons/sl';
import { BiCategory, BiMedal } from 'react-icons/bi';
import PrimaryButton from '../../ReuseableUI/PrimaryButton/PrimaryButton';

const ProjectDetails = () => {
  return (
    <div className='flex justify-center items-center my-10 container mx-auto'>
      {/* card for showing the projects  */}
      <div className='p-8 rounded-lg border-2 border-primary bg-slate-100 shadow-xl max-w-[1080px]'>
        {/* project thumbnail */}
        <div className=''>
          <img
            className='rounded-lg object-cover'
            src='https://i.ibb.co/1QDRKyT/flipcard2.jpg'
            loading='lazy'
          />
        </div>

        {/* crated by */}
        <div className='mt-6'>
          <div className='mx-auto w-fit'>
            <PrimaryButton text='Created By' />
          </div>
          <div className='flex justify-center items-center gap-2 py-3'>
            <img
              src='https://i.ibb.co/LvsQCJY/addidas-tshirt-joggers.jpg'
              className='sm:w-[50px] md:w-[60px] w-[40px] lg:w-[80px] rounded-full object-cover'
              loading='lazy'
            />
            <div className='text-center text-[12px] sm:text-[14px] md:text-base lg:text-xl'>
              <p className='gradient-text font-semibold capitalize'>
                Muhammad Shahin
              </p>
              <p className='gradient-text font-semibold'>
                muhammdsahin002@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* project contetnt */}
        <div className='mt-6 space-y-4'>
          {/* title & description */}
          <h2 className='lg:text-2xl xl:text-4xl text-lg font-semibold xl:font-bold  gradient-text uppercase text-center'>
            React Quiz Application Using Node JS
          </h2>
          <p className='text-center'>
            Craft and manage assignments effortlessly. Specify tasks, set
            deadlines, and choose the difficulty level. Take control of your
            learning journey. deadlines, and choose the difficulty level. Take
            control of your learning journey.
          </p>

          <div className='flex flex-wrap justify-center items-center gap-1 lg:gap-2 xl:gap-6 md:gap-0'>
            {/* difficulty level */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Diffculty Level
              </p>
              <button
                className={`round-btn bg-red-500 flex justify-center items-center gap-1 lg:gap-2`}
              >
                <AiOutlineFrown className='md:text-[26px]' />
                Hard
              </button>
            </div>
            {/* due date */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Due Date
              </p>
              <button
                className={`round-btn bg-primary flex justify-center items-center gap-1 lg:gap-2`}
              >
                <SlCalender className='md:text-[22px]' />6 Nov, 2023
              </button>
            </div>
            {/* total marks */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Total Marks
              </p>
              <button
                className={`round-btn bg-tertiary flex justify-center items-center gap-1 lg:gap-2`}
              >
                <BiMedal className='md:text-[22px]' />
                60 Marks
              </button>
            </div>
            {/* category */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Category
              </p>
              <button
                className={`round-btn bg-tertiary flex justify-center items-center gap-1 lg:gap-2`}
              >
                <BiCategory className='md:text-[22px]' />
                Web Dev
              </button>
            </div>
          </div>
          {/* project requirements */}
          <div className='py-10'>
            <h2 className='lg:text-2xl xl:text-4xl text-lg font-semibold xl:font-bold  gradient-text uppercase text-center'>
              project requirements
            </h2>
            <p className='text-center'>
              Craft and manage assignments effortlessly. Specify tasks, set
              deadlines, and choose the difficulty level. Take control of your
              learning journey. deadlines, and choose the difficulty level. Take
              control of your learning journey.
            </p>
          </div>

          {/* actions buttons */}
          <div className='flex-bet md:justify-center gap-2 md:gap-4 lg:gap-16'>
            <PrimaryButton
              text='Take Assignment'
              icon={<AiOutlinePlus />}
            />
            <PrimaryButton
              text='View Details'
              icon={<SlActionRedo />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
