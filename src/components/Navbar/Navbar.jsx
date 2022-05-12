import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import Navlinks from './Navlinks/Navlinks';
import SideBar from './Sidebar/Sidebar';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

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

              <button className="nav-btn">
                <label htmlFor="checkbox" className="toggler">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={theme === 'dark-theme'}
                    onChange={toggleTheme}
                  />
                  <span className="ball"></span>
                  <svg
                    className="sun"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <svg
                    className="moon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </label>
              </button>
            </div>
          </div>

          {/* nav links */}
          <ul className="nav-links">
            <Navlinks setToggleMenu={setToggleMenu} />
            <button className="nav-btn">
              <label htmlFor="checkbox" className="toggler">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={theme === 'dark-theme'}
                  onChange={toggleTheme}
                />
                <span className="ball"></span>
                <svg
                  className="sun"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <svg
                  className="moon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </label>
            </button>
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
