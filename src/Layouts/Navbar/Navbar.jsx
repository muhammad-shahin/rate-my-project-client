/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink, useNavigate } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { useContext, useState } from 'react';
import './Navbar.css';
import UserProfile from '../../Components/UserProfile/UserProfile';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { AiOutlineBell } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import DarkTheme from '../../Components/DarkTheme/DarkTheme';
import logo from '../../assets/logo/rate-my-project-logo.png';
import { BiExit } from 'react-icons/bi';

const Navbar = () => {
  const { user, showProfile, setShowProfile, logoutUser } =
    useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className='relative'>
      <nav className='py-3 container mx-auto flex justify-between items-center w-[90%] xl:w-auto text-black dark:text-white'>
        {/* logo */}
        <div
          className='cursor-pointer'
          onClick={() => {
            navigate('/');
          }}
        >
          <img
            src={logo}
            alt='Rate My Project Logo'
            loading='lazy'
            className='lg:w-[150px] w-[100px]'
          />
        </div>
        {/* nav items */}
        <ul
          className={` xl:static fixed top-[75px] ${
            isOpen ? 'right-0' : 'right-[-100%]'
          } xl:h-auto h-screen xl:w-auto w-[50%] flex xl:flex-row flex-col bg-gray-200 dark:bg-[#00aaff6c] backdrop-blur-[25px] xl:px-5 py-2 justify-start xl:justify-center items-center duration-700 z-[100] xl:rounded-full xl:pt-2 pt-10 text-white`}
        >
          <li
            className='text-lightBlack dark:text-white font-medium text-[12px] md:text-[16px] nav-item grad-bg duration-500 hover:text-white rounded-full px-5 py-2'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/'>Home</NavLink>
          </li>
          <li
            className='text-lightBlack dark:text-white font-medium text-[12px] md:text-[16px] nav-item grad-bg duration-500 hover:text-white rounded-full px-5 py-2'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/submitted-projects'>Submitted</NavLink>
          </li>
          <li
            className='text-lightBlack dark:text-white font-medium text-[12px] md:text-[16px] nav-item grad-bg duration-500 hover:text-white rounded-full px-5 py-2'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/all-projects'>All Assignment</NavLink>
          </li>
          <li
            className='text-lightBlack dark:text-white font-medium text-[12px] md:text-[16px] nav-item grad-bg duration-500 hover:text-white rounded-full px-5 py-2'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/create-project'>Create Assignment</NavLink>
          </li>
          <li
            className='text-lightBlack dark:text-white font-medium text-[12px] md:text-[16px] nav-item grad-bg duration-500 hover:text-white rounded-full px-5 py-2'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/my-projects'>My Assignment</NavLink>
          </li>
          <li
            className='text-lightBlack dark:text-white font-medium text-[12px] md:text-[16px] nav-item grad-bg duration-500 hover:text-white rounded-full px-5 py-2'
            onClick={() => {
              setOpen(false);
            }}
          >
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
          {user ? (
            ''
          ) : (
            <li
              className='text-lightBlack dark:text-white font-medium text-[12px] md:text-[16px] nav-item grad-bg duration-500 hover:text-white rounded-full px-5 py-2'
              onClick={() => {
                setOpen(false);
              }}
            >
              <NavLink to='/login'>Login</NavLink>
            </li>
          )}
        </ul>
        {/* cart icons */}
        <div className='flex justify-center items-center gap-5'>
          <DarkTheme />
          <div
            className='bg-gray-200 opacity-[0.7] backdrop-blur-lg rounded-full p-2 cursor-pointer hover:opacity-[1] hover:bg-primary hover:bg-opacity-[0.39] hover:text-white relative  dark:opacity-[1] dark:text-primary gradient-anim'
            title='Logout'
          >
            {user && (
              <BiExit
                onClick={() => {
                  logoutUser();
                }}
                className='text-[22px]'
              />
            )}
          </div>
        </div>
        {/* Profile Icon */}
        <div
          id='profile-icon'
          className='flex justify-center items-center gap-6 group'
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          {user && user.photoURL !== null && (
            <img
              src={user.photoURL}
              className='w-[48px] h-[48px] object-cover rounded-full cursor-pointer'
            />
          )}
          {user?.photoURL === null && (
            <VscAccount
              className={`text-[32px] text-[#00aaff6c] cursor-pointer rounded-full ${
                showProfile && 'bg-primary text-white'
              }`}
            />
          )}
          {user && showProfile ? (
            <div className='absolute lg:top-[90px] top-[80px] lg:right-[180px] sm:right-[20px] right-0'>
              <UserProfile />
            </div>
          ) : (
            ''
          )}
        </div>

        {/* hamburger menu */}
        <div className='xl:hidden'>
          <Hamburger
            color='#00A9FF'
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>
      <hr className='text-primaryColor dark:text-primary' />
    </header>
  );
};

export default Navbar;
