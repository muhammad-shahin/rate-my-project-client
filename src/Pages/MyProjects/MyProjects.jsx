import { useContext, useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyProjectCard from '../../Components/MyProjectCard/MyProjectCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import getMyProjectsData from '../../Api/getMyProjectsData';
import Lottie from 'lottie-react';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';
import loadingAnimation from '../../assets/Animation/loadingAnimation.json';

const MyProjects = () => {
  const secureAxios = useAxios();
  //   const [myProjectsData, setMyProjectsData] = useState([]);
  const userData = JSON.parse(localStorage.getItem('userData'));

  const { data: myProjectsData, isLoading } = useQuery({
    queryKey: ['myProjectsData'],
    queryFn: getMyProjectsData,
  });

  console.log(myProjectsData);
  if (isLoading) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='text-5xl text-center gradient-text'>
          Loading Please Wait
        </h1>
        <Lottie
          loop
          animationData={loadingAnimation}
        />
      </div>
    );
  }
  if (!myProjectsData || myProjectsData.length === 0) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='text-5xl text-center gradient-text'>
          No Data Available
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
      <h1 className='lg:text-5xl text-2xl gradient-text text-center font-semibold py-2 pt-8'>
        My Submitted Assignments
      </h1>

      <div className='container mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-center content-center w-[90%] lg:w-full'>
        {myProjectsData?.map((project) => (
          <MyProjectCard
            key={project._id}
            projectData={project}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
