import React from 'react';

const Btn = ({ href, name, type }) => {
  return (
    <a href={href} className={`btn ${type}`}>
      {name}
    </a>
  );
};

export default Btn;
