import { useContext, useEffect, useState } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Banner from '../../Components/Banner/Banner';
import Heading from '../../ReuseableUI/Heading/Heading';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import PerformanceCount from '../../Components/PerformanceCount/PerformanceCount';
import FlipCard from '../../ReuseableUI/FlipCard/FlipCard';

const Home = () => {
  const { setLoading } = useContext(AuthContext);

  return (
    <div>
      <Banner />

      {/* How it works section */}
      <div className='lg:my-16 my-8'>
        <Heading title='How it Works?' />
        <HowItWorks />
      </div>

      <div className='container mx-auto lg:my-16 my-8'>
        <Heading title='Our Performance Snapshot' />
        <PerformanceCount />
      </div>

      <div className='container mx-auto lg:my-16 my-8'>
        <Heading title='Core Features' />
        <FlipCard />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
