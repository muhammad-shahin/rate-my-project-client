import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Banner from '../../Components/Banner/Banner';
import Heading from '../../ReuseableUI/Heading/Heading';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import PerformanceCount from '../../Components/PerformanceCount/PerformanceCount';
import CoreFeatures from '../../Components/CoreFeatures/CoreFeatures';
import OverlapImage from '../../ReuseableUI/OverlapImage/OverlapImage';
import Categories from '../../Components/Categories/Categories';
import Faq from '../../Components/FAQ/Faq';
import Footer from '../../Layouts/Footer/Footer';
import GetStartedBanner from '../../Components/Banner/GetStartedBanner';

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

      {/* perfromance count section */}
      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Our Performance Snapshot' />
        <PerformanceCount />
      </div>

      {/* features section */}
      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Core Features' />
        <CoreFeatures />
      </div>

      {/* improve your section */}
      <div className='container mx-auto lg:my-28 my-8 lg:block hidden'>
        <OverlapImage />
      </div>

      {/* improve your section */}
      <div className='container mx-auto lg:my-28 my-8'>
        <Heading
          title='Category We Have'
          subTitle='Explore Assignment By Category'
        />
        <Categories />
      </div>

      {/* FAQ section */}
      <div className='container mx-auto lg:my-28 my-8'>
        <Heading title='Frequently Asked Question' />
        <Faq />
      </div>
      {/* FAQ section */}
      <div className='lg:my-28 my-8'>
        <GetStartedBanner title='What are you waiting for? Join the study team!' />
      </div>
      {/* footer section */}
      <Footer />
    </div>
  );
};

export default Home;
