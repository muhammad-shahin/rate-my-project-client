import { AiOutlineFrown, AiOutlinePlus } from 'react-icons/ai';
import { SlCalender, SlActionRedo } from 'react-icons/sl';
import { BiCategory, BiMedal } from 'react-icons/bi';
import PrimaryButton from '../../ReuseableUI/PrimaryButton/PrimaryButton';
import useAxios from '../../Hooks/useAxios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import MultiSelectOption from '../../ReuseableUI/MultiSelectOption/MultiSelectOption';

const AllProjects = () => {
  const secureAxios = useAxios();
  const [allProjectsData, setAllProjectsData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [filterData, setFilterData] = useState('');

  useEffect(() => {
    secureAxios
      .get('/projects')
      .then((res) => {
        setAllProjectsData(res.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed To Load All Porjects Data! Try Again',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }, []);

  const handleFilterByCategory = (selected) => {
    const queryString = new URLSearchParams();
    queryString.append('category', selected.join('&'));

    secureAxios
      .get(`/projects/filter?${queryString.toString()}`)
      .then((res) => {
        console.log(res.data);
        setAllProjectsData(res.data);
        setFilterData(
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
        setAllProjectsData(res.data);
        setFilterData(
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
    <section className='bg-[#eff2f39c] dark:bg-dark'>
      <h1 className='lg:text-5xl text-2xl gradient-text text-center font-semibold py-2 pt-8'>
        All Assignments
      </h1>
      <div className='w-fit mx-auto min-w-[250px] flex flex-wrap gap-6 mt-8'>
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
      {filterData && (
        <p className='lg:text-3xl text-2xl gradient-text text-center font-semibold py-2 pt-8'>
          {filterData}
        </p>
      )}

      <div className='container mx-auto grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-center content-center w-[90%] lg:w-full'>
        {allProjectsData?.map((project) => (
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
