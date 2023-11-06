import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SlCalender } from 'react-icons/sl';

const CustomInput = ({ value, onClick }) => {
  return (
    <div className='relative w-full'>
      <div className='flex items-center w-full'>
        <input
          type='text'
          className='w-[100%] border-2 border-gray px-5 py-2 text-[18px] font-medium focus:text-black text-gray placeholder:text-[16px] rounded outline-2 outline-secondary appearance-none cursor-pointer hidden'
          value={value}
          onClick={onClick}
          placeholder='Select Date'
          id='datepicker'
          readOnly
        />
      </div>
    </div>
  );
};

const DatePicker = ({ name, handleChange, label, placeholder, isRequired }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const dateFormat = 'dd MMM, yyyy';
  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
    handleChange(null, name, date);
  };
  return (
    <div className='w-full'>
      <label
        htmlFor={name}
        className='text-[14px] font-medium'
      >
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <label
        className='w-[100%] border-2 border-gray px-5 py-2 text-[18px] font-medium focus:text-black text-gray placeholder:text-[16px] rounded outline-2 focus:border-secondary appearance-none cursor-pointer block relative'
        htmlFor='datepicker'
      >
        {selectedDate ? format(selectedDate, dateFormat) : placeholder}
        <Datepicker
          selected={selectedDate}
          onChange={handleDateChange}
          customInput={<CustomInput />}
          placeholderText='Selct Due Date'
        />
        <div className='absolute top-[50%] translate-y-[-50%] right-[15px]'>
          <SlCalender className='text-primary cursor-pointer text-[24px]' />
        </div>
      </label>
    </div>
  );
};

DatePicker.propTypes = {};

export default DatePicker;
