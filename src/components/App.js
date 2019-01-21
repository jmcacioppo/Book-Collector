import React from 'react';
import SideNav from "./side-nav/side-nav";
import Routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="FlexContainer">
          <SideNav />
          <Routes />
        </div>
      </div>
    )
  }
}

export default App;
