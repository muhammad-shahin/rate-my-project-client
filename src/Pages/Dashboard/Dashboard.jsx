import { useQuery } from '@tanstack/react-query';
import getMyCreatedProjectsData from '../../Api/getMyCreatedProjectsData';
import Lottie from 'lottie-react';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';
import loadingAnimation from '../../assets/Animation/loadingAnimation.json';
import DashboardCard from './DashboardCard';
import Heading from '../../ReuseableUI/Heading/Heading';

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const { data: myCreatedProjectsData, isLoading } = useQuery({
    queryKey: ['myCreatedProjectsData', userData],
    queryFn: getMyCreatedProjectsData,
    initialData: { myCreatedProjectsData: [] },
  });

  console.log(myCreatedProjectsData);

  if (isLoading) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4'>
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
  if (!myCreatedProjectsData || myCreatedProjectsData.length === 0) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4 px-[5%]'>
        <h1 className='text-5xl text-center gradient-text'>
          No Assignment Data Available
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
      <Heading
        title='My Dashboard'
        subTitle='Assignment Created By You'
      />

      <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 xl:gap-10  lg:w-full container mx-auto'>
        {Array.isArray(myCreatedProjectsData)
          ? myCreatedProjectsData.map((data) => (
              <DashboardCard
                key={data._id}
                projectData={data}
              />
            ))
          : ''}
      </div>
    </section>
  );
};

export default Dashboard;
