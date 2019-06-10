import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './routes/home/HomePage';
import TopicsPage from './routes/topics/TopicsPage';
import NotFoundPage from './routes/not-found/NotFoundPage';
import Header from './common/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/topics" component={TopicsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
