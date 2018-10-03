import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import UpcomingPage from './upcoming/UpcomingPage'
import PastPage from './past/PastPage'

const Routes = () => (
  <main className="App">
    <h1 className="TextCenter">Books Database</h1>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/upcoming' component={UpcomingPage} />
      <Route path='/past' component={PastPage} />
    </Switch>
  </main>
)

export default Routes
