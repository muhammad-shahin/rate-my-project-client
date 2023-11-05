import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Banner from '../../Components/Banner/Banner';
import Heading from '../../ReuseableUI/Heading/Heading';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import PerformanceCount from '../../Components/PerformanceCount/PerformanceCount';
import CoreFeatures from '../../Components/CoreFeatures/CoreFeatures';
import OverlapImage from '../../ReuseableUI/OverlapImage/OverlapImage';

const Home = () => {
  const { setLoading } = useContext(AuthContext);

  return (
    <div>
      <Banner />

      {/* How it works section */}
      <div className='lg:my-28 my-8'>
        <Heading title='How it Works?' />
        <HowItWorks />
      </div>

      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Our Performance Snapshot' />
        <PerformanceCount />
      </div>

      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Core Features' />
        <CoreFeatures />
      </div>
      <div className='container mx-auto lg:my-28 my-8 lg:block hidden'>
        <OverlapImage />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
