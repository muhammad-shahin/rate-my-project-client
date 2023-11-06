import { AiOutlineSmile, AiOutlineMeh, AiOutlineFrown } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BiCategory } from 'react-icons/bi';

const AllProjects = () => {
  return (
    <div className='flex justify-start items-center my-10 container mx-auto'>
      {/* card for showing the projects  */}
      <div className='p-5 rounded-lg border-2 border-primary bg-slate-100 shadow-xl max-w-[550px]'>
        {/* project thumbnail */}
        <div className=''>
          <img
            className='rounded-lg object-cover'
            src='https://i.ibb.co/1QDRKyT/flipcard2.jpg'
            loading='lazy'
          />
        </div>

        {/* project contetnt */}
        <div className='mt-6 space-y-4'>
          <h2 className='lg:text-2xl text-lg font-semibold gradient-text uppercase'>
            React Quiz Application Using Node JS
          </h2>
          <p className='text-center'>
            Craft and manage assignments effortlessly. Specify tasks, set
            deadlines, and choose the difficulty level. Take control of your
            learning journey. deadlines, and choose the difficulty level. Take
            control of your learning journey.
          </p>
          <div className='flex justify-between'>
            {/* difficulty level */}
            <div>
              <p className='gradient-text font-medium text-center'>
                Diffculty Level
              </p>
              <button
                className={`round-btn bg-red-500 flex justify-center items-center gap-2`}
              >
                <AiOutlineFrown className='text-[26px]' />
                Hard
              </button>
            </div>

            {/* due date */}
            <div>
              <p className='gradient-text font-medium text-center'>Due Date</p>
              <button
                className={`round-btn bg-primary flex justify-center items-center gap-2`}
              >
                <SlCalender className='text-[22px]' />6 Nov, 2023
              </button>
            </div>

            {/* category */}
            <div>
              <p className='gradient-text font-medium text-center'>Category</p>
              <button
                className={`round-btn bg-tertiary flex justify-center items-center gap-2`}
              >
                <BiCategory className='text-[22px]' />
                Web Dev
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
