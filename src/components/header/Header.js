import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="Header" >
    <nav>
      <span>&#9776;</span>
      <ul>
        <li><Link to='/'>This Month</Link></li>
        <li><Link to='/upcoming'>Upcoming</Link></li>
        <li><Link to='/past'>Past</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
