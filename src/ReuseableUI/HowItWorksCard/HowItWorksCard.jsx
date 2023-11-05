import PropTypes from 'prop-types';
import {
  FaTasks,
  FaUsers,
  FaChalkboardTeacher,
  FaChartLine,
} from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

const iconMapping = {
  FaTasks: <FaTasks className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white ' />,
  FaUsers: <FaUsers className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white ' />,
  FaChalkboardTeacher: (
    <FaChalkboardTeacher className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white ' />
  ),
  FaChartLine: <FaChartLine className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white ' />,
  FaUserGroup: <FaUserGroup className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white ' />,
};

const HowItWorksCard = ({ cardData }) => {
  const { Title, Description, Icon } = cardData;
  return (
    <div className='rounded-lg text-center border-2 border-primary gradient-anim p-10 w-fit space-y-3 gradient-bg max-w-[450px] cursor-pointer flex justify-center items-start flex-col'>
      <div className='round-bg mx-auto'>{iconMapping[Icon]}</div>
      <h2 className='md:text-3xl text-xl font-semibold text-white'>{Title}</h2>
      <p className='md:text-md text-sm  md:font-medium max-w-sm text-slate-100'>
        {Description}
      </p>
    </div>
  );
};

HowItWorksCard.propTypes = {};

export default HowItWorksCard;
