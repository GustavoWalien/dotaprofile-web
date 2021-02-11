import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Players from '../pages/Players';
import Ranking from '../pages/Ranking';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/players" component={Players} />
    <Route path="/ranking" component={Ranking} />
  </Switch>
);

export default Routes;
