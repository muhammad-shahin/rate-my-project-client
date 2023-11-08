import { HiStatusOnline } from 'react-icons/hi';
import PropTypes from 'prop-types';
import PrimaryButton from '../../ReuseableUI/PrimaryButton/PrimaryButton';
import { BiMedal } from 'react-icons/bi';
import TextBox from '../../ReuseableUI/TextBox/TextBox';

const MyProjectCard = ({ projectData }) => {
  const {
    totalMarks,
    projectTitle,
    projectThumbnail,
    givenMarks,
    approveStatus,
    creatorName,
    creatorEmail,
    creatorPhotoUrl,
    feedback,
  } = projectData;
  return (
    <div className='my-10'>
      {/* card for showing the projects  */}
      <div className='p-5 rounded-lg border-2 border-primary bg-slate-100 shadow-xl max-w-[470px] dark:bg-[#2d343c]'>
        {/* project thumbnail */}
        <div className=''>
          <img
            className='rounded-lg object-cover mx-auto lg:h-[250px] h-[200px]'
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

          <div className='flex flex-wrap justify-center items-center gap-1 lg:gap-4 md:gap-3'>
            {/* submit status */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Submit Status
              </p>
              <button
                className={`round-btn flex justify-center items-center gap-1 lg:gap-2 ${
                  approveStatus === 'Pending'
                    ? 'bg-red-600'
                    : givenMarks + ' bg-tertiary'
                }`}
              >
                <HiStatusOnline className='md:text-[26px]' />
                {approveStatus}
              </button>
            </div>

            {/* total marks */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Total Marks
              </p>
              <button
                className={`round-btn sm:min-w-[150px] bg-primary flex justify-center items-center gap-1 lg:gap-2`}
              >
                <BiMedal className='md:text-[22px]' />
                {totalMarks} Marks
              </button>
            </div>

            {/* your obtained marks */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Obtained Marks
              </p>
              <button
                className={`round-btn sm:min-w-[150px] flex justify-center items-center gap-1 lg:gap-2 ${
                  givenMarks === 0 ? 'bg-orange-500' : 'bg-green-500'
                }`}
              >
                <BiMedal className='md:text-[22px]' />
                {givenMarks === 0 ? 'Pending' : givenMarks + ' Marks'}
              </button>
            </div>
          </div>
          {/* examinner feedback */}
          {approveStatus !== 'Pending' && (
            <div className='text-center'>
              <TextBox
                label='Examinner Feedback'
                readOnly={true}
                value={feedback}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

MyProjectCard.propTypes = {
  projectData: PropTypes.object,
};

export default MyProjectCard;
