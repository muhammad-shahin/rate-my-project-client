import { useContext, useEffect, useState } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Banner from '../../Components/Banner/Banner';
import Heading from '../../ReuseableUI/Heading/Heading';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';

const Home = () => {
  const { setLoading } = useContext(AuthContext);

  return (
    <div>
      <Banner />

      {/* How it works section */}
      <div>
        <Heading title='How it Works?' />
        <HowItWorks />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
