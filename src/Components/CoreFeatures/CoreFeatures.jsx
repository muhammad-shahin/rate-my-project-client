import axios from 'axios';
import { useEffect, useState } from 'react';
import FlipCard from '../../ReuseableUI/FlipCard/FlipCard';

const CoreFeatures = () => {
  const [worksData, setWorksData] = useState([]);
  useEffect(() => {
    axios.get('/coreFeatures.json').then((res) => {
      setWorksData(res.data);
    });
  }, []);
  return (
    <div className='container mx-auto flex justify-center flex-wrap gap-6 px-[5%] lg:px-0'>
      {worksData.map((data, index) => (
        <FlipCard
          key={index}
          cardData={data}
        />
      ))}
    </div>
  );
};

export default CoreFeatures;
