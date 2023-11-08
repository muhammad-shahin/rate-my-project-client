import { HiStatusOnline } from 'react-icons/hi';
import PropTypes from 'prop-types';
import PrimaryButton from '../../ReuseableUI/PrimaryButton/PrimaryButton';
import { BiMedal } from 'react-icons/bi';
import { BsClipboardCheck, BsFullscreen } from 'react-icons/bs';
import TextBox from '../../ReuseableUI/TextBox/TextBox';
import CustomModal from '../CustomModal/CustomModal';
import { useState } from 'react';
import Input from '../Input/Input';
import PreviewPdf from '../PreviewPdf/PreviewPdf';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const SubmittedProjectCard = ({ projectData }) => {
  const secureAxios = useAxios();
  const [modalStatus, setModalStatus] = useState(false);
  const [fileModalStatus, setFileModalStatus] = useState(false);
  const {
    totalMarks,
    projectTitle,
    projectThumbnail,
    givenMarks,
    approveStatus,
    examineeName,
    examineeEmail,
    submittedFileUrl,
    _id,
  } = projectData;
  console.log(submittedFileUrl);
  const handleGiveMarks = (e) => {
    e.preventDefault();
    const form = e.target;
    const givenMarks = form.givenMarks.value;
    const feedback = form.feedback.value;
    const updateSubmitted = { givenMarks, feedback };
    console.log(updateSubmitted);
    secureAxios
      .put('/submitted-projects', updateSubmitted)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          form.reset();
          setModalStatus(false);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Submitted Assignment Updated Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed to Create Asignment! Try Again',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
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
        {/* submitted by */}
        <div className='mt-6'>
          <div className='mx-auto w-fit mb-4'>
            <PrimaryButton text='Submitted By' />
          </div>
          <div className='text-center text-[12px] sm:text-[14px] md:text-base'>
            <p className='gradient-text font-semibold capitalize'>
              {examineeName}
            </p>
            <p className='gradient-text font-semibold'>{examineeEmail}</p>
          </div>
        </div>
        {/* project contetnt */}
        <div className='mt-6 space-y-4 text-center'>
          {/* title & description */}
          <h2 className='lg:text-2xl text-lg font-semibold gradient-text uppercase text-center'>
            {projectTitle}
          </h2>

          {/* submitted file url */}
          <Input
            labelText='Submitted File URL'
            name='fileUrl'
            placeholder={submittedFileUrl}
            isRequired={false}
            type='text'
            readOnly={true}
          />

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
          </div>
          <div className='flex flex-wrap justify-center items-center gap-1 lg:gap-4 md:gap-3'>
            {/* preview submitted file  */}
            <div>
              <p className='gradient-text md:font-medium text-center'>
                Preview File
              </p>
              <button
                className={`round-btn sm:min-w-[150px] flex justify-center items-center gap-1 lg:gap-2 bg-tertiary gradient-anim`}
                onClick={() => setFileModalStatus(!fileModalStatus)}
              >
                <BsFullscreen className='md:text-[14px]' />
                Preview File
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
              />
            </div>
          )}
          {/* action button */}
          <div className='w-fit mx-auto'>
            <PrimaryButton
              handleOnClick={() => setModalStatus(true)}
              text='Give Marks'
              icon={<BsClipboardCheck className='text-[20px]' />}
            />
          </div>
        </div>
      </div>
      <CustomModal
        title='Give Marks To Examinee'
        message='Here is the assignment file submitted by the examinee. Preview it and give marks and feedback'
        modalStatus={modalStatus}
        setCustomModalStatus={setModalStatus}
      >
        <form
          onSubmit={handleGiveMarks}
          className='space-y-4'
        >
          <Input
            labelText='Enter Marks'
            name='givenMarks'
            placeholder='Enter Given Marks'
            isRequired={true}
            type='number'
          />
          <TextBox
            name='feedback'
            label='Feedback'
            placeholder='Write  feedback for examinee'
            isRequired={true}
          />
          <div className='w-fit mx-auto'>
            <PrimaryButton
              text='Submit Marks'
              type='submit'
            />
          </div>
        </form>
      </CustomModal>
      {/* modal to preview file */}
      <CustomModal
        title={`This File is Submitted By ${examineeName}`}
        modalStatus={fileModalStatus}
        setCustomModalStatus={setFileModalStatus}
      >
        <div className='mx-auto w-fit'>
          <PreviewPdf pdfUrl={submittedFileUrl} />
        </div>
      </CustomModal>
    </div>
  );
};

SubmittedProjectCard.propTypes = {
  projectData: PropTypes.object,
};

export default SubmittedProjectCard;
