import { AiOutlineDelete } from 'react-icons/ai';
import { BsCloudUpload } from 'react-icons/bs';
import PrimaryButton from '../../ReuseableUI/PrimaryButton/PrimaryButton';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import { useQueryClient } from '@tanstack/react-query';

const DashboardCard = ({ projectData }) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const secureAxios = useAxios();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    projectTitle,
    projectDescription,
    projectThumbnail,
    creatorName,
    creatorEmail,
    creatorPhotoUrl,
    _id,
  } = projectData;
  const handleDeleteProject = () => {
    Swal.fire({
      title: 'Are you sure want to delete this Assignment?',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No',
      cancelButtonColor: '#ff2c2c',
      confirmButtonColor: '#00A9FF',
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios
          .delete(`/projects/${_id}`)
          .then((res) => {
            console.log(res);
            if (res.data.acknowledged) {
              queryClient.invalidateQueries([
                'myCreatedProjectsData',
                userData,
              ]);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Delted Successfully!',
                showConfirmButton: false,
                timer: 2500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Faile to delete! Try Again',
              showConfirmButton: false,
              timer: 2500,
            });
          });
      }
    });
  };
  return (
    <div className='my-10'>
      {/* card for showing the projects  */}
      <div className='p-5 rounded-lg border-2 border-primary bg-slate-100 shadow-xl  dark:bg-[#2d343c]'>
        {/* project thumbnail */}
        <div className=''>
          <img
            className='rounded-lg object-cover mx-auto lg:h-[300px] h-[200px]'
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
          <p className='text-center dark:text-white'>
            {projectDescription.slice(0, 120)}...
          </p>
          {/* actions buttons */}
          <div className='flex-bet gap-2 md:gap-0'>
            <PrimaryButton
              handleOnClick={() => navigate(`/update/${_id}`)}
              text='Update'
              icon={<BsCloudUpload className='text-white' />}
            />
            <PrimaryButton
              handleOnClick={handleDeleteProject}
              text='Delete'
              icon={<AiOutlineDelete className='text-[20px]' />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardCard.propTypes = {
  projectData: PropTypes.object,
};

export default DashboardCard;
