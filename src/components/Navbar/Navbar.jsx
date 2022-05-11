import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import Navlinks from './Navlinks/Navlinks';
import SideBar from './Sidebar/Sidebar';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [fixedNavbar]);

  const handleScroll = () => {
    setFixedNavbar(window.pageYOffset > 80);
  };

  return (
    <>
      <nav className={`nav ${fixedNavbar ? 'navbar-fixed' : ''}`} id="nav">
        <div className="section-center nav-center">
          {/* nav header */}
          <div className="nav-header">
            <a href="#home">
              <img src={logo} className="nav-logo" alt="nav logo" />
            </a>
            <div className="nav-btn-wrapper">
              <button
                className="nav-btn"
                id="nav-btn"
                onClick={() => setToggleMenu(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* nav links */}
          <ul className="nav-links">
            <Navlinks setToggleMenu={setToggleMenu} />
          </ul>
        </div>
      </nav>

      {toggleMenu && (
        <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      )}
    </>
  );
};

export default Navbar;
