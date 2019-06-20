import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppMaterialTheme from './AppMaterialTheme';
import Header from './components/common/Header';
import HomePage from './components/routes/home/HomePage';
import TopicsPage from './components/routes/topics/TopicsPage';
import NotFoundPage from './components/routes/not-found/NotFoundPage';

const App = () => {
  return (
    <AppMaterialTheme>
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
    </AppMaterialTheme>
  );
};

export default App;
