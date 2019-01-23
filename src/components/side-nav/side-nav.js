import React from "react";
import { Link } from "react-router-dom";

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
      <span className="nav-button--open" onClick={openNav}>
        &#9776;
      </span>
      <nav id="sidenav" className="sidenav">
        <a className="nav-button--close" onClick={closeNav}>
          &times;
        </a>
        <Link className="link-text" to="/">
          Current
        </Link>{" "}
        <br />
        <Link className="link-text" to="/upcoming">
          Upcoming
        </Link>{" "}
        <br />
        <Link className="link-text" to="/past">
          Past
        </Link>{" "}
        <br />
      </nav>
    </header>
  );
}

export default SideNav;
