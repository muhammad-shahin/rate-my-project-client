import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
  return (
    <main className='bg-white dark:bg-dark duration-500'>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
