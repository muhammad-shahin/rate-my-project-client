import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import { SlCalender } from 'react-icons/sl';
import { format } from 'date-fns';
import { useState } from 'react';

const formatDate = (date) => {
  if (!date) return '';
  return format(date, 'dd MMM, yyyy'); // Format the date as '12 Nov, 2023'
};

const CustomDatePicker = ({
  label,
  name,
  handleChange,
  isRequired,
  message,
  placeholder,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const minDate = new Date();
  const handleDateChange = (date) => {
    if (date < minDate) {
      return;
    }
    const formattedDate = formatDate(date);
    setSelectedDate(date);
    handleChange(null, name, formattedDate);
  };
  return (
    <div className='flex flex-col gap-1 w-full relative'>
      <label className='text-[14px] font-medium'>
        {label}{' '}
        {isRequired && label && (
          <span className='text-red-600 text-[22px] font-medium'>*</span>
        )}{' '}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        name={name}
        className='w-[100%] border-2 border-gray px-5 py-2 text-[18px] font-medium text-[#000] placeholder:text-[#959292] placeholder:text-[16px] rounded outline-2 outline-secondary relative'
        required={isRequired}
        placeholderText={selectedDate ? selectedDate : placeholder}
        minDate={minDate}
      ></DatePicker>
      <div className='absolute top-[70%] translate-y-[-50%] right-[15px]'>
        <SlCalender className='text-primary cursor-pointer text-[24px]' />
      </div>

      {message && (
        <p className='text-[14px] font-medium text-purple mt-2'>{message}</p>
      )}
    </div>
  );
};

CustomDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  handleChange: PropTypes.func,
  message: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default CustomDatePicker;
