import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import FileUpload from '../FileUpload/FileUpload';
import SelectOptions from '../../ReuseableUI/SelectOptions/SelectOptions';
import TextBox from '../../ReuseableUI/TextBox/TextBox';
import DatePicker from '../../ReuseableUI/DatePicker/DatePicker';
import RichTextBox from '../../ReuseableUI/RichTextBox/RichTextBox';
const Input = ({
  name,
  type,
  placeholder,
  onChange,
  errorMessage,
  labelText,
  onBlur,
  optionsData,
  defaultOption = 'Select Option',
  isRequired,
  clearValue,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  if (type === 'file') {
    return (
      <FileUpload
        label={labelText}
        isRequired={isRequired}
        handleChange={onChange}
        name={name}
      />
    );
  }
  if (type === 'select') {
    return (
      <SelectOptions
        label={labelText}
        isRequired={isRequired}
        handleChange={onChange}
        name={name}
        optionsData={optionsData}
        defaultOption={defaultOption}
      />
    );
  }
  if (type === 'textbox') {
    return (
      <TextBox
        label={labelText}
        isRequired={isRequired}
        handleChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    );
  }
  if (type === 'calendar') {
    return (
      <DatePicker
        name={name}
        label={labelText}
        type={type}
        isRequired={isRequired}
        handleChange={onChange}
        placeholder={placeholder}
      />
    );
  }
  if (type === 'richtextbox') {
    return (
      <RichTextBox
        name={name}
        label={labelText}
        type={type}
        isRequired={isRequired}
        handleChange={onChange}
        placeholder={placeholder}
        clearValue={clearValue}
      />
    );
  }
  return (
    <div className='w-[100%] relative'>
      <label
        htmlFor={name}
        className='text-[14px] font-medium'
      >
        {labelText}{' '}
        {isRequired && labelText && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <input
        className='w-[100%] border-2 border-gray px-5 py-2 text-[18px] font-medium text-[#000] placeholder:text-gray placeholder:text-[16px] rounded outline-2 outline-secondary'
        type={showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={isRequired}
        id={name}
      />
      {type === 'password' && (
        <AiFillEye
          title='Click To Show or Hide Password'
          onClick={() => {
            setShowPassword(!showPassword);
          }}
          className={`absolute top-[40px] md:top-[35px] md:right-[20px] right-[10px] text-[24px] md:text-[32px] ${
            showPassword ? 'text-sky-500' : 'text-gray-700'
          } cursor-pointer`}
        />
      )}
      {errorMessage && (
        <p className='text-[14px] text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  labelText: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  optionsData: PropTypes.array,
  defaultOption: PropTypes.string,
  isRequired: PropTypes.bool,
  clearValue: PropTypes.bool,
};

export default Input;
