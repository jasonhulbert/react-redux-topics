import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import Header from './components/common/Header';
import HomePage from './components/routes/home/HomePage';
import TopicsPage from './components/routes/topics/TopicsPage';
import NotFoundPage from './components/routes/not-found/NotFoundPage';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route
          path="/"
          render={({ location }) => (
            <React.Fragment>
              <Header pathname={location.pathname} />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/topics" component={TopicsPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </React.Fragment>
          )}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
