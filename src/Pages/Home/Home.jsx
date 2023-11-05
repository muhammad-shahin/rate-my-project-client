import { useContext, useEffect, useState } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Banner from '../../Components/Banner/Banner';

const Home = () => {
  const { setLoading } = useContext(AuthContext);

  return (
    <div>
      <Banner />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
