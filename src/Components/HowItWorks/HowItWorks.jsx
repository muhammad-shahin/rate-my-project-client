import axios from 'axios';
import { useEffect, useState } from 'react';
import HowItWorksCard from '../../ReuseableUI/HowItWorksCard/HowItWorksCard';

const HowItWorks = () => {
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
        />
      ))}
    </div>
  );
};

export default HowItWorks;
