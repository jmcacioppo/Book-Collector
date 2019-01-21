import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/home'
import Upcoming from './upcoming/upcoming'
import Past from './past/past'

const Routes = () => (
  <main className="App" id="routesContainer">
    <h1 className="TextCenter MainTitle">Book Collector</h1>
    <hr />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/upcoming' component={Upcoming} />
      <Route path='/past' component={Past} />
    </Switch>
  </main>
)

export default Routes
