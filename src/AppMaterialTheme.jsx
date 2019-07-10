import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepPurple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    fontFamily: [
      'Muli',
      'serif'
    ].join(',')
  }
});

const AppMaterialTheme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

AppMaterialTheme.propTypes = {
  children: PropTypes.array
};

export default AppMaterialTheme;
