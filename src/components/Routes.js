import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
    </Switch>
  </main>
)

export default Routes
