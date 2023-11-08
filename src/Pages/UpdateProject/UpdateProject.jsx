import { useEffect, useState } from 'react';
import Form from '../../Components/Form/Form';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import getProjectById from '../../Api/getProjectById';
import { useQuery } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import notAvailableAnim from '../../assets/Animation/notAvailable.json';
import loadingAnimation from '../../assets/Animation/loadingAnimation.json';

const UpdateProject = () => {
  const secureAxios = useAxios();
  const { projectId } = useParams();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [updateProjectData, setUpdateProjectData] = useState({
    projectTitle: 'Your Title Will Add Here',
    projectDescription: 'Your Description Will Add Here',
    projectThumbnail:
      'https://i.ibb.co/82MWGSQ/Your-Thumbnail-Will-Add-Here.png',
    difficultyLevel: 'Easy',
    dueDate: '3 Nov, 2023',
    category: 'Programming',
    totalMarks: '60',
    creatorName: userData.displayName,
    creatorEmail: userData.email,
    creatorPhotoUrl: userData.photoURL,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(updateProjectData);
    secureAxios
      .put(`/projects/${projectId}`, updateProjectData)
      .then((res) => {
        console.log(res);
        if (res?.data?.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Assignment Updated Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setCurrentData({});
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed to Update Asignment! Try Again',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleFieldValueChange = (e, customName, customValue) => {
    if (!e && customName === 'dueDate') {
      setUpdateProjectData((prevData) => ({
        ...prevData,
        [customName]: customValue,
      }));
    } else if (!e && customName === 'requirements') {
      setUpdateProjectData((prevData) => ({
        ...prevData,
        [customName]: customValue,
      }));
    } else if (!e && customName === 'projectThumbnail') {
      setUpdateProjectData((prevData) => ({
        ...prevData,
        [customName]: customValue,
      }));
    } else {
      const fieldName = e.target.name;
      const value = e.target.value;
      setUpdateProjectData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    }
  };
  const [currentData, setCurrentData] = useState({});
  useEffect(() => {
    secureAxios.get(`/project/${projectId}`).then((res) => {
      console.log(res.data);
      setCurrentData(res.data);
      setUpdateProjectData(res.data);
    });
  }, []);
  console.log('currentData', currentData);
  const projectCreationFields = [
    {
      name: 'projectTitle',
      type: 'text',
      placeholder: 'Enter Assignment Title',
      labelText: 'Assignment Title',
      onChange: handleFieldValueChange,
      isRequired: false,
      defaultValue: currentData.projectTitle,
    },
    {
      name: 'projectDescription',
      type: 'textbox',
      placeholder: 'Enter Assignment Description',
      labelText: 'Assignment Description',
      onChange: handleFieldValueChange,
      isRequired: false,
      defaultValue: currentData.projectDescription,
    },
    {
      name: 'totalMarks',
      type: 'number',
      placeholder: 'Enter Assignment Total Mark',
      labelText: 'Assignment Mark',
      onChange: handleFieldValueChange,
      isRequired: false,
      defaultValue: currentData.totalMarks,
    },
    {
      name: 'projectThumbnail',
      type: 'file',
      placeholder: 'Upload Assignment Thumbnail',
      onChange: handleFieldValueChange,
      labelText: 'Assignment Thumbnail',
      isRequired: false,
      message: currentData.projectThumbnail,
    },
    {
      name: 'difficultyLevel',
      type: 'select',
      defaultOption: currentData.difficultyLevel,
      optionsData: ['Easy', 'Medium', 'Hard'],
      onChange: handleFieldValueChange,
      labelText: 'Assignment Difficulty Level',
      isRequired: false,
      defaultValue: currentData.difficultyLevel,
    },
    {
      name: 'category',
      type: 'select',
      defaultOption: currentData.category,
      optionsData: [
        'Physics',
        'Mathematics',
        'Programming',
        'Web Development',
        'App Development',
        'Artificial Intelligence',
        'Other',
      ],
      onChange: handleFieldValueChange,
      labelText: 'Assignment Subject / Category',
      isRequired: false,
      defaultValue: currentData.category,
    },
    {
      name: 'dueDate',
      type: 'calendar',
      placeholder: currentData.dueDate,
      onChange: handleFieldValueChange,
      labelText: 'Select due date',
      isRequired: false,
    },
    {
      name: 'requirements',
      type: 'richtextbox',
      placeholder: `Write Details Assignment Requirements.
Use Heading, Bullet Points so that participant can understand your assignment better`,
      onChange: handleFieldValueChange,
      labelText: 'Write Assignment Requirements',
      isRequired: false,
    },
  ];
  return (
    <div className=''>
      <Form
        title={`Update Assignment`}
        inputFields={projectCreationFields}
        submitText={'Update Assignment'}
        handleFormSubmit={handleFormSubmit}
        loginSignUpForm={false}
      >
        <div className='sticky'>
          <h4 className='lg:text-3xl font-bold text-center max-w-[450px] text-lightBlack mx-auto'>
            Live Preview Of Updated Card
          </h4>
          {<ProjectCard projectData={updateProjectData} />}
        </div>
      </Form>
    </div>
  );
};

export default UpdateProject;
