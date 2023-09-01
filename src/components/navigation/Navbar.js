import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import './Navbar.css';
import { DisplayContext } from '../../App';
import profile from '../images/profile.png';

function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [page, setPage] = useState('about');

  const { narrowDisplay, setNarrowDisplay } = useContext(DisplayContext);
  
  const showNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = (newPage) => {
    setPage(newPage);
    if (narrowDisplay) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update sidebar visibility accordingly
      if (window.innerWidth < 480) {
        setNavbar(false);
        setNarrowDisplay(true);
      } else {
        setNavbar(true);
        setNarrowDisplay(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    // Initial check on component mount
    handleResize();
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setNarrowDisplay]);

  let menuClass;
  if (!navbar) {
    menuClass = 'nav-menu';
  } else {
    menuClass = narrowDisplay ? 'nav-menu full' : 'nav-menu active';
  }
  
  return (
    <>
      {narrowDisplay && <div className="navbar">
        <Link to="#" className="menu-bars">
          <FontAwesomeIcon icon="fa-solid fa-bars" onClick={showNavbar} size='2xs' />
        </Link>
      </div>}
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className={menuClass}>
          {narrowDisplay && <div className="navbar">
            <Link to="#" className="menu-bars">
              <FontAwesomeIcon icon="fa-solid fa-bars" onClick={showNavbar} size='2xs' />
            </Link>
          </div>}
          <div className='profile'>
            <img className='profile-pic' src={profile} />
            <div className='name'>
              Jessica Zhang
            </div>
            <div className='designation'>
              CS Student at Columbia
            </div>
          </div>
          <div className='nav-menu-items'>
            <div className={page === 'about' ? 'active-link' : 'nav-text'} onClick={() => closeNavbar('about')}>
              <Link to={'/'}>
                <FontAwesomeIcon icon="fa-solid fa-star" size="sm" />
                <span>About</span>
              </Link>
            </div>
            <div className={page === 'courses' ? 'active-link' : 'nav-text'} onClick={() => closeNavbar('courses')} >
              <Link to={'/courses'}>
                <FontAwesomeIcon icon="fa-solid fa-school" size="sm" />
                <span>Courses</span>
              </Link>
            </div>
            <div className={page === 'experiences' ? 'active-link' : 'nav-text'} onClick={() => closeNavbar('experiences')} >
              <Link to={'/experiences'}>
                <FontAwesomeIcon icon="fa-solid fa-folder" size="sm" />
                <span>Experience</span>
              </Link>
            </div>
            <div className={page === 'contact' ? 'active-link' : 'nav-text'} onClick={() => closeNavbar('contact')} >
              <Link to={'/contact'}>
                <FontAwesomeIcon icon="fa-solid fa-address-book" size="sm" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;