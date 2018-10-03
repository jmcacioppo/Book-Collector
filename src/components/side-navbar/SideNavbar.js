import React from 'react'
import { Link } from 'react-router-dom'

function SideNavbar() {
  function openNav() {
    let sidenav = document.getElementById('sidenav');
    console.log(sidenav);
  }

  return (
    <header className="Navbar">
      <span onClick={openNav}>&#9776;</span>
      <nav id="sidenav">
        <div>
          <Link to='/'>This Month</Link> <br />
          <Link to='/upcoming'>Upcoming</Link> <br />
          <Link to='/past'>Past</Link> <br />
        </div>
      </nav>
    </header>
  )
}

export default SideNavbar
