import React from 'react';
import Navlinks from '../Navlinks/Navlinks';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Sidebar.css';

const SideBar = ({ toggleMenu, setToggleMenu }) => {
  return (
    <aside
      className={`${toggleMenu ? 'sidebar show-sidebar' : 'sidebar'}`}
      id="sidebar"
    >
      {/* close sidebar btn */}
      <button
        className="close-btn"
        id="close-btn"
        onClick={() => setToggleMenu(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {/* nav links */}
      <ul className="sidebar-links">
        <Navlinks setToggleMenu={setToggleMenu} />
      </ul>

      {/* social icons */}
      <SocialLinks />
    </aside>
  );
};

export default SideBar;
