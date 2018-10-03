import React from 'react';
import Header from "./header/Header";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="FlexContainer">
          <Header />
          <Routes />
        </div>
      </div>
    )
  }
}

export default App;
