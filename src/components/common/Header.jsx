import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Container } from '@material-ui/core';

const navItems = [
  {
    label: 'Home',
    to: '/',
    exact: 'true'
  },
  {
    label: 'Topics',
    to: '/topics',
    exact: 'false'
  }
];

const Header = props => {
  return (
    <AppBar position="static" color="primary">
      <Container>
        <Tabs value={props.pathname}>
          {navItems.map(({ label, to, exact }, index) => (
            <Tab
              disableRipple
              component={Link}
              key={index}
              label={label}
              value={to}
              to={to}
              exact={exact}
            />
          ))}
        </Tabs>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Header;
