import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  FaFlask,
  FaCalculator,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaBrain,
  FaMicroscope,
} from 'react-icons/fa';
import CategoryCard from '../../ReuseableUI/CategoryCard/CategoryCard';

const categoryIcons = [
  <FaFlask
    key={1}
    className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
  />,
  <FaCalculator
    key={3}
    className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
  />,
  <FaCode
    key={4}
    className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
  />,
  <FaGlobe
    key={5}
    className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
  />,
  <FaMobileAlt
    key={6}
    className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
  />,
  <FaBrain
    key={7}
    className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
  />,
  <FaMicroscope
    key={8}
    className='md:text-[52px] text-[32px] md:p-2 mx-auto text-white'
  />,
];
const Categories = () => {
  const [worksData, setWorksData] = useState([]);
  useEffect(() => {
    axios.get('/categoryWeHave.json').then((res) => {
      setWorksData(res.data);
    });
  }, []);
  return (
    <div className='container mx-auto flex justify-center flex-wrap gap-6 px-[5%] lg:px-0'>
      {worksData.map((data, index) => (
        <CategoryCard
          key={index}
          cardData={data}
          icon={categoryIcons[index]}
        />
      ))}
    </div>
  );
};

export default Categories;
