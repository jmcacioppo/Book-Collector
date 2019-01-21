import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("routesContainer").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("routesContainer").style.marginLeft = "0px";
  }

  return (
    <header>
      <span className="openbtn" onClick={openNav}>&#9776;</span>
      <nav id="sidenav" className="sidenav">
        <div>
          <a className="closebtn" onClick={closeNav}>&times;</a>
          <Link to='/'>Current</Link> <br />
          <Link to='/upcoming'>Upcoming</Link> <br />
          <Link to='/past'>Past</Link> <br />
        </div>
      </nav>
    </header>
  )
}

export default SideNav
