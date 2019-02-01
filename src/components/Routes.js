import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Upcoming from './upcoming/upcoming';
import Past from './past/past';

const Routes = () => (
  <main className="app" id="routesContainer">
    <h1 className="text-center app__header">Book Collector</h1>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/past" component={Past} />
    </Switch>
  </main>
);

export default Routes;
