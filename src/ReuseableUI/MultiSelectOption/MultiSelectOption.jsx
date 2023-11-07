/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const MultiSelectOption = ({
  label,
  name,
  handleChange,
  optionsData,
  isRequired,
  defaultOption,
  message,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [event, setEvent] = useState(null);

  const handleFieldValueChange = (e) => {
    setEvent(e);
    const value = e.target.value;
    if (!selectedOptions.includes(value) && value !== defaultOption) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((option) => option !== optionToRemove)
    );
  };

  useEffect(() => {
    if (event) {
      handleChange(selectedOptions);
    }
  }, [event, selectedOptions]);
  return (
    <div>
      <label className='text-[18px] font-medium text-text-gray'>
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <div className='px-2 py-3 rounded border border-primary text-[12px] w-full relative bg-white flex justify-between items-center gap-2 mt-2'>
        <div className='flex justify-start items-center gap-2 whitespace-nowrap overflow-x-auto max-w-[80%]'>
          {selectedOptions?.map((option, index) => (
            <span
              key={index}
              className='bg-primary text-white px-5 py-1 rounded-full flex justify-center items-center gap-2 w-fit '
            >
              {option}
              <AiOutlineClose
                className='cursor-pointer hover:scale-[1.1] duration-300 hover:text-red-700'
                onClick={() => {
                  handleRemoveOption(option);
                }}
              />
            </span>
          ))}
        </div>

        <div
          className={`text-[14px] relative pr-5 bg-primary text-white rounded-full`}
        >
          <select
            className='w-fit cursor-pointer appearance-none px-5 outline-none bg-primary rounded-full pl-6 text-lg'
            name={name}
            onChange={handleFieldValueChange}
            id='multiSelect'
            onClick={() => {
              setOpen(!open);
            }}
            onBlur={() => {
              setOpen(false);
            }}
            required={isRequired}
          >
            <option value={defaultOption}>{defaultOption}</option>
            {optionsData?.map((district, index) => (
              <option
                key={index}
                value={district}
              >
                {district}
              </option>
            ))}
          </select>
          <div
            htmlFor='multiSelect'
            className='absolute top-[50%] right-[15px] translate-y-[-50%]'
          >
            {open ? (
              <BiSolidUpArrow className='text-white text-[12px]' />
            ) : (
              <BiSolidDownArrow className='text-white text-[12px]' />
            )}
          </div>
        </div>
      </div>
      {message && (
        <p className='text-[14px] font-medium text-purple mt-1'>{message}</p>
      )}
    </div>
  );
};

MultiSelectOption.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  message: PropTypes.string,
  defaultOption: PropTypes.string,
  handleChange: PropTypes.func,
  optionsData: PropTypes.array.isRequired,
  isRequired: PropTypes.bool,
};

export default MultiSelectOption;
