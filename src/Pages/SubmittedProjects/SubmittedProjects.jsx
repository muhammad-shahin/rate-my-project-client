import { useQuery } from '@tanstack/react-query';
import getPendingSubmit from '../../Api/getPendingSubmit';
import Lottie from 'lottie-react';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';
import loadingAnimation from '../../assets/Animation/loadingAnimation.json';
import SubmittedProjectCard from '../../Components/SubmittedProjectCard/SubmittedProjectCard';

const SubmittedProjects = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const { data: submittedProjects, isLoading } = useQuery({
    queryKey: ['submittedProjects', userData],
    queryFn: getPendingSubmit,
  });
  console.log(submittedProjects);
  if (isLoading) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4 px-[5%]'>
        <h1 className='lg:text-5xl text-2xl text-center gradient-text py-3'>
          Loading Please Wait
        </h1>
        <Lottie
          loop
          animationData={loadingAnimation}
        />
      </div>
    );
  }
  if (!submittedProjects || submittedProjects.length === 0) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4  px-[5%]'>
        <h1 className='text-4xl text-center gradient-text font-semibold'>
          No Subitted Data Available
        </h1>
        <Lottie
          loop
          animationData={notAvailableAnim}
        />
      </div>
    );
  }
  return (
    <section className='bg-[#eff2f39c] dark:bg-dark'>
      <h1 className='lg:text-4xl text-2xl gradient-text text-center font-semibold py-2 pt-8 px-[10%] xl:px-0'>
        People That Submitted Your Assignments
      </h1>

      <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 xl:gap-10  lg:w-full container mx-auto'>
        {submittedProjects?.map((project) => (
          <SubmittedProjectCard
            key={project._id}
            projectData={project}
          />
        ))}
      </div>
    </section>
  );
};

export default SubmittedProjects;
