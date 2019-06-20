import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

const AppMaterialTheme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

AppMaterialTheme.propTypes = {
  children: PropTypes.array
};

export default AppMaterialTheme;
