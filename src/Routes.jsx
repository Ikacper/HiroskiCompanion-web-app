import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageTemplate from './Components/PageTemplate';

import Dashboard from './Pages/Dashboard/Dashboard';
import HomePage from './Pages/HomePage/HomePage';

const Routes = (
  <PageTemplate>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Dashboard" component={Dashboard} />
    </Switch>
  </PageTemplate>
);

export default Routes;
