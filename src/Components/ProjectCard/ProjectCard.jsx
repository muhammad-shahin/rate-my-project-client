import {
  AiOutlineSmile,
  AiOutlineMeh,
  AiOutlineFrown,
  AiOutlinePlus,
} from 'react-icons/ai';
import { SlCalender, SlActionRedo } from 'react-icons/sl';
import { BiCategory, BiMedal } from 'react-icons/bi';
import PrimaryButton from '../../ReuseableUI/PrimaryButton/PrimaryButton';
import PropTypes from 'prop-types';

const ProjectCard = ({ projectData }) => {
  const {
    projectTitle,
    projectDescription,
    projectThumbnail,
    creatorName,
    creatorEmail,
    creatorPhotoUrl,
    diffcultyLevel,
    dueDate,
    category,
    totalMarks,
  } = projectData;
  return (
    <div className='flex justify-start items-center my-10 container mx-auto'>
      {/* card for showing the projects  */}
      <div className='p-5 rounded-lg border-2 border-primary bg-slate-100 shadow-xl max-w-[470px]'>
        {/* project thumbnail */}
        <div className=''>
          <img
            className='rounded-lg object-cover'
            src={projectThumbnail}
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
              src={creatorPhotoUrl}
              className='sm:w-[50px] md:w-[60px] w-[40px] rounded-full object-cover'
              loading='lazy'
            />
            <div className='text-center text-[12px] sm:text-[14px] md:text-base'>
              <p className='gradient-text font-semibold capitalize'>
                {creatorName}
              </p>
              <p className='gradient-text font-semibold'>{creatorEmail}</p>
            </div>
          </div>
        </div>

        {/* project contetnt */}
        <div className='mt-6 space-y-4'>
          {/* title & description */}
          <h2 className='lg:text-2xl text-lg font-semibold gradient-text uppercase text-center'>
            {projectTitle}
          </h2>
          <p className='text-center'>{projectDescription.slice(0, 100)}</p>

          <div className='flex flex-wrap justify-center items-center gap-1 lg:gap-8 md:gap-0'>
            {/* difficulty level */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Diffculty Level
              </p>
              <button
                className={`round-btn flex justify-center items-center gap-1 lg:gap-2 ${
                  (diffcultyLevel === 'Hard' && 'bg-red-500',
                  diffcultyLevel === 'Medium' && 'bg-orange-400',
                  diffcultyLevel === 'Easy' && 'bg-green-500')
                }`}
              >
                {
                  (diffcultyLevel === 'Hard' && (
                    <AiOutlineFrown className='md:text-[26px]' />
                  ),
                  diffcultyLevel === 'Medium' && (
                    <AiOutlineMeh className='md:text-[26px]' />
                  ),
                  diffcultyLevel === 'Easy' && (
                    <AiOutlineSmile className='md:text-[26px]' />
                  ))
                }

                {diffcultyLevel}
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
                <SlCalender className='md:text-[22px]' />
                {dueDate}
              </button>
            </div>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-1 lg:gap-8 md:gap-0'>
            {/* total marks */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Total Marks
              </p>
              <button
                className={`round-btn sm:min-w-[150px] bg-tertiary flex justify-center items-center gap-1 lg:gap-2`}
              >
                <BiMedal className='md:text-[22px]' />
                {totalMarks} Marks
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
                {category}
              </button>
            </div>
          </div>
          {/* actions buttons */}
          <div className='flex-bet gap-2 md:gap-0'>
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

ProjectCard.propTypes = {
  projectData: PropTypes.object,
};

export default ProjectCard;
