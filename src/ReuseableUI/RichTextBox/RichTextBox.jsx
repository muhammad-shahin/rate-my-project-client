import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextBox = ({
  label,
  name,
  value,
  handleChange,
  isRequired,
  message,
  placeholder,
}) => {
  const [richTextValue, setRichTextValue] = useState(value);

  const handleRichTextChange = (content) => {
    setRichTextValue(content);
    handleChange(null, name, content);
  };

  return (
    <div className='flex flex-col gap-1 w-full'>
      <label className='text-[14px] font-medium'>
        {label}{' '}
        {isRequired && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <div className='relative'>
        <ReactQuill
          theme='snow'
          value={richTextValue}
          onChange={handleRichTextChange}
          placeholder={placeholder}
          className='block h-[200px] mb-8'
        />
      </div>
      {message && (
        <p className='text-[14px] font-medium text-purple mt-2'>{message}</p>
      )}
    </div>
  );
};

RichTextBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  message: PropTypes.string,
  placeholder: PropTypes.string,
};

export default RichTextBox;
