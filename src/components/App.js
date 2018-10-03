import React from 'react';
import SideNavbar from "./side-navbar/SideNavbar";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="FlexContainer">
          <SideNavbar />
          <Routes />
        </div>
      </div>
    )
  }
}

export default App;
