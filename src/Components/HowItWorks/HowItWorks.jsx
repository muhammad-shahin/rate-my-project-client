import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FaTasks,
  FaUsers,
  FaChalkboardTeacher,
  FaChartLine,
} from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import HowItWorksCard from '../../ReuseableUI/HowItWorksCard/HowItWorksCard';

const HowItWorks = () => {
  const iconArray = [
    <FaTasks
      key={1}
      className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
    />,
    <FaUsers
      key={2}
      className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
    />,
    <FaChalkboardTeacher
      key={3}
      className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
    />,
    <FaChartLine
      key={4}
      className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
    />,
    <FaUserGroup
      key={5}
      className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
    />,
  ];

  const [worksData, setWorksData] = useState([]);
  useEffect(() => {
    axios.get('/howItWorks.json').then((res) => {
      setWorksData(res.data);
    });
  }, []);
  return (
    <div className='container mx-auto flex justify-center flex-wrap gap-6 px-[5%] lg:px-0'>
      {worksData.map((data, index) => (
        <HowItWorksCard
          key={index}
          cardData={data}
          icon={iconArray[index]}
        />
      ))}
    </div>
  );
};

export default HowItWorks;
