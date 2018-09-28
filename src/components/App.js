import React from 'react';
import Header from "./header/Header";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    )
  }
}

export default App;
