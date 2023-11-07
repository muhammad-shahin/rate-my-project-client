import { useContext, useEffect, useState } from 'react';
import Form from '../../Components/Form/Form';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAxios from '../../Hooks/useAxios';
import Swal from 'sweetalert2';

const CreateProject = () => {
  const secureAxios = useAxios();
  const { user } = useContext(AuthContext);

  const [clearRichTextBox, setClearRichTextBox] = useState(false);
  // Load the data from local storage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('createProjectData');
    if (storedData) {
      setCreateProjectData(JSON.parse(storedData));
    }
  }, []);
  const [createProjectData, setCreateProjectData] = useState({
    projectTitle: 'Your Title Will Add Here',
    projectDescription: 'Your Description Will Add Here',
    projectThumbnail:
      'https://i.ibb.co/82MWGSQ/Your-Thumbnail-Will-Add-Here.png',
    difficultyLevel: 'Easy',
    dueDate: '3 Nov, 2023',
    category: 'Programming',
    totalMarks: '60',
    creatorName: user?.displayName,
    creatorEmail: user?.email,
    creatorPhotoUrl: user?.photoURL,
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(createProjectData);
    secureAxios
      .post('/projects', createProjectData)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Assignment Created Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          setClearRichTextBox(true);
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
  useEffect(() => {
    localStorage.setItem(
      'createProjectData',
      JSON.stringify(createProjectData)
    );
  }, [createProjectData]);
  // show password regular expression error
  const handleFieldValueChange = (e, customName, customValue) => {
    if (!e && customName === 'dueDate') {
      setCreateProjectData((prevData) => ({
        ...prevData,
        [customName]: customValue,
      }));
    } else if (!e && customName === 'requirements') {
      setCreateProjectData((prevData) => ({
        ...prevData,
        [customName]: customValue,
      }));
    } else if (!e && customName === 'projectThumbnail') {
      setCreateProjectData((prevData) => ({
        ...prevData,
        [customName]: customValue,
      }));
    } else {
      const fieldName = e.target.name;
      const value = e.target.value;
      setCreateProjectData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    }
  };
  const [projectCreationFields, setProjectCreationFields] = useState([
    {
      name: 'projectTitle',
      type: 'text',
      placeholder: 'Enter Assignment Title',
      labelText: 'Assignment Title',
      onChange: handleFieldValueChange,
      isRequired: true,
    },
    {
      name: 'projectDescription',
      type: 'textbox',
      placeholder: 'Enter Assignment Description',
      labelText: 'Assignment Description',
      onChange: handleFieldValueChange,
      isRequired: true,
    },
    {
      name: 'totalMarks',
      type: 'number',
      placeholder: 'Enter Assignment Total Mark',
      labelText: 'Assignment Mark',
      onChange: handleFieldValueChange,
      isRequired: true,
    },
    {
      name: 'projectThumbnail',
      type: 'file',
      placeholder: 'Upload Assignment Thumbnail',
      onChange: handleFieldValueChange,
      labelText: 'Assignment Thumbnail',
      isRequired: true,
    },
    {
      name: 'difficultyLevel',
      type: 'select',
      defaultOption: 'Select Difficulty Level',
      optionsData: ['Easy', 'Medium', 'Hard'],
      onChange: handleFieldValueChange,
      labelText: 'Assignment Difficulty Level',
      isRequired: true,
    },
    {
      name: 'category',
      type: 'select',
      defaultOption: 'Select Category',
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
      isRequired: true,
    },
    {
      name: 'dueDate',
      type: 'calendar',
      placeholder: 'Select last Submission Date',
      onChange: handleFieldValueChange,
      labelText: 'Select due date',
      isRequired: true,
    },
    {
      name: 'requirements',
      type: 'richtextbox',
      placeholder: `Write Details Assignment Requirements.
Use Heading, Bullet Points so that participant can understand your assignment better`,
      onChange: handleFieldValueChange,
      labelText: 'Write Assignment Requirements',
      isRequired: false,
      clearValue: clearRichTextBox,
    },
  ]);
  useEffect(() => {
    if (clearRichTextBox) {
      // Manually clear the RichTextBox by updating the fields
      const newProjectCreationFields = projectCreationFields.map((field) => {
        if (field.name === 'requirements') {
          // Replace the old 'requirements' field with a new one
          return {
            name: 'requirements',
            type: 'richtextbox',
            placeholder: `Write Details Assignment Requirements.
            Use Heading, Bullet Points so that participants can understand your assignment better`,
            onChange: handleFieldValueChange,
            labelText: 'Write Assignment Requirements',
            isRequired: false,
          };
        }
        return field; // Keep the other fields as they are
      });

      setProjectCreationFields(newProjectCreationFields);
      setClearRichTextBox(false);
    }
  }, [clearRichTextBox]);
  return (
    <div className=''>
      <Form
        title='Create A New Assignment'
        inputFields={projectCreationFields}
        submitText={'Create Assignment'}
        handleFormSubmit={handleFormSubmit}
        loginSignUpForm={false}
      >
        <div className='sticky'>
          <h4 className='lg:text-3xl font-bold text-center max-w-[450px] text-lightBlack'>
            Live Preview Of Assignment Card
          </h4>
          <ProjectCard projectData={createProjectData} />
        </div>
      </Form>
    </div>
  );
};

export default CreateProject;
