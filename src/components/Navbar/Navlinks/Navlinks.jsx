import React from 'react';

const Navlinks = ({ setToggleMenu }) => {
  return (
    <>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#home">
          <span>01.</span>
          home
        </a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#about">
          <span>02.</span>about
        </a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#skills">
          <span>03.</span>skills
        </a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#portfolio">
          <span>04.</span>portfolio
        </a>
      </li>
      <li onClick={() => setToggleMenu(false)}>
        <a href="#contact">
          <span>05.</span>contact
        </a>
      </li>
    </>
  );
};

export default Navlinks;
