import { useContext, useEffect, useState } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
  const { setLoading } = useContext(AuthContext);


  return (
    <div>
      
      <Footer />
    </div>
  );
};

export default Home;
