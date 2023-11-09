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
import { AiOutlineArrowRight } from 'react-icons/ai';

const AllProjects = () => {
  const secureAxios = useAxios();
  // const [allProjectsData, setAllProjectsData] = useState([]);
  const [filterDataMsg, setFilterDataMsg] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // Fetch all projects
  const {
    data: { result: allProjectsData, totalCount },
    error,
  } = useQuery({
    queryKey: ['allProjectsData', currentPage],
    queryFn: () => getAllProjects(currentPage),
    initialData: { allProjectsData: [], totalCount: 0 },
  });
  console.log(error);

  // get total pages needed according to total data foun from server
  const totalPages = Math.ceil(totalCount / 6);
  const pages = [...new Array(totalPages).fill(0)];
  // handle loading
  if (allProjectsData === undefined) {
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
  // handle no data found
  if (!allProjectsData || allProjectsData.length === 0) {
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

  const handleFilterByCategory = (selected) => {
    const queryString = new URLSearchParams();
    queryString.append('category', selected.join('&'));

    secureAxios
      .get(`/projects/filter?${queryString.toString()}`)
      .then((res) => {
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

  const handlePageChange = (move) => {
    if (move === 'next' && currentPage + 1 !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
    if (move === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
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
        {(filteredProjects?.length > 0
          ? filteredProjects
          : allProjectsData
        )?.map((project) => (
          <ProjectCard
            key={project._id}
            projectData={project}
          />
        ))}
      </div>
      <div className='flex justify-center items-center flex-wrap gap-6 pb-10'>
        {/* previous button */}
        <button
          className='rounded-full p-2 bg-primary flex juce items-center border-2 border-transparent hover:border-primary hover:bg-transparent duration-500'
          onClick={() => handlePageChange('prev')}
        >
          <AiOutlineArrowRight className='text-[32px] text-white hover:text-primary rotate-[180deg]' />
        </button>
        {/* all pages number */}

        {pages.map((value, index) => (
          <button
            key={index}
            className={`lg:w-[58px] w-[40px] lg:h-[58px] h-[40px] rounded-full p-2 hover:bg-primary flex justify-center items-center border-2 hover:border-transparent border-primary duration-500 font-semibold lg:text-2xl text-lg text-primary hover:text-white ${
              index === currentPage
                ? 'bg-tertiary text-white border-tertiary'
                : 'bg-transparent'
            }`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}

        {/* next button */}
        <button
          className='rounded-full p-2 bg-primary flex juce items-center border-2 border-transparent hover:border-primary hover:bg-transparent duration-500'
          onClick={() => handlePageChange('next')}
        >
          <AiOutlineArrowRight className='text-[32px] text-white hover:text-primary' />
        </button>
      </div>
    </section>
  );
};

export default AllProjects;
