import {
  AiOutlineSmile,
  AiOutlineMeh,
  AiOutlineFrown,
  AiOutlinePlus,
} from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BiCategory, BiMedal } from 'react-icons/bi';
import PrimaryButton from '../../ReuseableUI/PrimaryButton/PrimaryButton';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import CustomModal from '../../Components/CustomModal/CustomModal';
import TextBox from '../../ReuseableUI/TextBox/TextBox';
import PropTypes from 'prop-types';
import UploadAnyFile from '../../Components/UploadAnyFile/UploadAnyFile';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

// dangerous html set
function DangerousHTML({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

const ProjectDetails = () => {
  const secureAxios = useAxios();
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState({});
  const [modalStatus, setModalStatus] = useState(false);
  const [submittedFileUrl, setSubmittedFileUrl] = useState(null);
  const [submittedQuickNote, setSubmittedQuickNote] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    secureAxios.get(`/project/${projectId}`).then((res) => {
      console.log(res);
      setProjectData(res.data);
    });
  }, []);
  const {
    projectTitle,
    projectDescription,
    projectThumbnail,
    creatorName,
    creatorEmail,
    creatorPhotoUrl,
    difficultyLevel,
    dueDate,
    category,
    totalMarks,
    requirements,
    _id,
  } = projectData;

  const handleProjectFileUpload = (fileUrl) => {
    setSubmittedFileUrl(fileUrl);
  };
  const handleQuickNote = (e) => {
    setSubmittedQuickNote(e.target.value);
  };
  const handleProjectSubmit = () => {
    if (submittedFileUrl && submittedQuickNote) {
      setError(null);
      const newSubmit = {
        submittedFileUrl,
        submittedQuickNote,
        submitterEmail: user.email,
        examineeName: user.displayName,
        approveStatus: 'Pending',
        givenMarks: 0,
        totalMarks,
        projectTitle,
        projectThumbnail,
      };
      console.log(newSubmit);
    } else {
      setError('Please Give Necessary Information to Submit This Assignment');
      // Swal.fire({
      //   position: 'center',
      //   icon: 'error',
      //   title: 'Failed To Submit',
      //   text: 'Please Give Necessary Information to Submit This Assignment',
      //   showConfirmButton: false,
      //   timer: 1500,
      // });
    }
  };
  return (
    <div className='flex justify-center items-center my-10 container mx-auto lg:w-full w-[90%]'>
      {/* card for showing the projects  */}
      <div className='p-8 rounded-lg border-2 border-primary bg-slate-100 shadow-xl max-w-[1080px]'>
        {/* project thumbnail */}
        <div className=''>
          <img
            className='rounded-lg object-cover h-[400px] w-full'
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
              className='sm:w-[50px] md:w-[60px] w-[40px] lg:w-[80px] rounded-full object-cover'
              loading='lazy'
            />
            <div className='text-center text-[12px] sm:text-[14px] md:text-base lg:text-xl'>
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
          <h2 className='lg:text-2xl xl:text-4xl text-lg font-semibold xl:font-bold  gradient-text uppercase text-center'>
            {projectTitle}
          </h2>
          <p className='text-center'>{projectDescription}</p>

          <div className='flex flex-wrap justify-center items-center gap-1 lg:gap-2 xl:gap-6 md:gap-0'>
            {/* difficulty level */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Diffculty Level
              </p>
              <button
                className={`round-btn flex justify-center items-center gap-1 lg:gap-2 ${
                  difficultyLevel === 'Hard' && 'bg-red-500'
                } ${difficultyLevel === 'Medium' && 'bg-orange-500'} ${
                  difficultyLevel === 'Easy' && 'bg-green-500'
                }`}
              >
                {difficultyLevel === 'Hard' && (
                  <AiOutlineFrown className='md:text-[26px]' />
                )}
                {difficultyLevel === 'Medium' && (
                  <AiOutlineMeh className='md:text-[26px]' />
                )}
                {difficultyLevel === 'Easy' && (
                  <AiOutlineSmile className='md:text-[26px]' />
                )}

                {difficultyLevel}
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
            {/* total marks */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Total Marks
              </p>
              <button
                className={`round-btn bg-tertiary flex justify-center items-center gap-1 lg:gap-2`}
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
          {/* project requirements */}
          <div className='py-10 space-y-3'>
            <h2 className='lg:text-2xl xl:text-4xl text-lg font-semibold xl:font-bold  gradient-text uppercase text-center'>
              project requirements
            </h2>
            <div className='text-center w-fit mx-auto space-y-3 font-medium text-lg'>
              {<DangerousHTML htmlContent={requirements} />}
            </div>
          </div>

          {/* actions buttons */}
          <div className='w-fit mx-auto'>
            <PrimaryButton
              handleOnClick={() => setModalStatus(true)}
              text='Take Assignment'
              icon={<AiOutlinePlus />}
            />
          </div>
        </div>
      </div>
      <CustomModal
        title='Ready To Submit?'
        message='You can take assignment anytime. Just see the requirements and complete your work then submit your work.'
        modalStatus={modalStatus}
        setCustomModalStatus={setModalStatus}
      >
        <div className='space-y-4'>
          <UploadAnyFile
            label='Upload Assignment File'
            handleChange={handleProjectFileUpload}
          />
          <TextBox
            label='Quick Note'
            placeholder='Write  if something necessary to let the examine know about'
            handleChange={handleQuickNote}
          />
          {error && (
            <p className='text-[14px] text-red-600 max-w-[300px] mx-auto font-medium'>
              {error}
            </p>
          )}
          <div className='w-fit mx-auto'>
            <PrimaryButton
              text='Submit Assignment'
              handleOnClick={handleProjectSubmit}
            />
          </div>
        </div>
      </CustomModal>
    </div>
  );
};
DangerousHTML.propTypes = {
  htmlContent: PropTypes.node,
};
export default ProjectDetails;
