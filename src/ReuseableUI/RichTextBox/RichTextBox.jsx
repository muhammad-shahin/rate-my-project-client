import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextBox = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <ReactQuill
        theme='snow'
        value={value}
        onChange={setValue}
      />
      ;
    </div>
  );
};

RichTextBox.propTypes = {};

export default RichTextBox;
