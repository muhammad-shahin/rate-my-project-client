import { useState } from 'react';
import Form from '../../Components/Form/Form';
import RichTextBox from '../../ReuseableUI/RichTextBox/RichTextBox';

const CreateProject = () => {
  const [createProjectData, setCreateProjectData] = useState({});
  const handleCreateProject = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(createProjectData);
  };
  // show password regular expression error
  const handleFieldValueChange = (e, customName, customValue) => {
    if (!e && customName === 'dueDate') {
      setCreateProjectData((prevData) => ({
        ...prevData,
        [customName]: customValue,
      }));
    } else {
      const fieldName = e.target.name;
      const value = e.target.value;
      console.log(fieldName, value);
      setCreateProjectData((prevData) => ({
        ...prevData,
        [fieldName]: value,
      }));
    }
  };
  console.log(createProjectData);
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
      name: 'totalMark',
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
      labelText: 'Assignment Difficult Level',
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
  ]);
  return (
    <div className=''>
      <RichTextBox />
      <Form
        title='Create A New Assignment'
        inputFields={projectCreationFields}
        submitText={'Create Assignment'}
        handleFormSubmit={handleCreateProject}
        loginSignUpForm={false}
      >
        {' '}
      </Form>
    </div>
  );
};

export default CreateProject;
