import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { DisplayContext } from '../../App';
import './Navbar.css';

function Navbar() {
  const [navbar, setNavbar] = useState(true);

  const { narrowDisplay, setNarrowDisplay } = useContext(DisplayContext);

  let menuClass;
  if (!navbar) {
    menuClass = 'nav-menu';
  } else {
    menuClass = narrowDisplay ? 'nav-menu full' : 'nav-menu active';
  }

  return (
    <nav className={menuClass}>
      <IconContext.Provider value={{ color: "undefined" }}>
        <div className='nav-menu-items'>
          <Link to={'/'}>
            <FontAwesomeIcon icon="fa-solid fa-star" size="sm" />
            <span>About</span>
          </Link>
        </div>
      </IconContext.Provider>
    </nav>
  );
}

export default Navbar;