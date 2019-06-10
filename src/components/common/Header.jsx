import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: 'red' };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {' | '}
      <NavLink to="/topics" activeStyle={activeStyle}>
        Topics
      </NavLink>
    </nav>
  );
};

export default Header;
