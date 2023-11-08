/* eslint-disable react-hooks/exhaustive-deps */
import useAxios from '../../Hooks/useAxios';
import { useState } from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import MultiSelectOption from '../../ReuseableUI/MultiSelectOption/MultiSelectOption';
import Lottie from 'lottie-react';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';
import loadingAnimation from '../../assets/Animation/loadingAnimation.json';
import getAllProjects from '../../Api/getAllProjects';
import { useQuery } from '@tanstack/react-query';

const AllProjects = () => {
  const secureAxios = useAxios();
  // const [allProjectsData, setAllProjectsData] = useState([]);
  const [filterDataMsg, setFilterDataMsg] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Fetch all projects
  const { data: allProjectsData, isLoading: isAllProjectsLoading } = useQuery({
    queryKey: ['allProjectsData'],
    queryFn: getAllProjects,
  });
  if (isAllProjectsLoading) {
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
  if (!allProjectsData || allProjectsData.length === 0) {
    return (
      <div className='w-full min-h-[90vh] flex flex-col justify-center items-center gap-4 px-[5%]'>
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

  const handleFilterByCategory = (selected) => {
    const queryString = new URLSearchParams();
    queryString.append('category', selected.join('&'));

    secureAxios
      .get(`/projects/filter?${queryString.toString()}`)
      .then((res) => {
        console.log(res.data);
        setFilteredProjects(res.data);
        setFilterDataMsg(
          `Total ${res.data.length} Assignment Found ${
            selected ? 'for ' + selected : ''
          }`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFilterByDifficulty = (selected) => {
    const queryString = new URLSearchParams();
    queryString.append('difficulty', selected.join('&'));

    secureAxios
      .get(`/projects/filter?${queryString.toString()}`)
      .then((res) => {
        console.log(res.data);
        setFilteredProjects(res.data);
        setFilterDataMsg(
          `Total ${res.data.length} Assignment Found ${
            selected.length !== 0 ? 'for ' + selected : ''
          }`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className='bg-[#eff2f39c] dark:bg-dark px-[10%] xl:px-0'>
      <h1 className='lg:text-5xl text-2xl gradient-text text-center font-semibold py-2 pt-8'>
        All Assignments
      </h1>
      <div className='w-fit mx-auto min-w-[250px] flex justify-center items-center flex-wrap gap-6 mt-8'>
        <MultiSelectOption
          name='filterByCategory'
          optionsData={[
            'Physics',
            'Mathematics',
            'Programming',
            'Artificial Intelligence',
            'App Development',
            'Web Development',
          ]}
          defaultOption={'Filter By Category'}
          handleChange={handleFilterByCategory}
          label='Filter By Category'
        />
        <MultiSelectOption
          name='filterByDifficulty'
          optionsData={['Easy', 'Medium', 'Hard']}
          defaultOption={'Filter By Difficulty'}
          handleChange={handleFilterByDifficulty}
          label='Filter By Difficulty'
        />
      </div>
      {filterDataMsg && (
        <p className='lg:text-3xl text-2xl gradient-text text-center font-semibold py-2 pt-8'>
          {filterDataMsg}
        </p>
      )}

      <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-6 xl:gap-10  lg:w-full container mx-auto'>
        {(filteredProjects.length > 0
          ? filteredProjects
          : allProjectsData
        )?.map((project) => (
          <ProjectCard
            key={project._id}
            projectData={project}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
