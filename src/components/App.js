import React from 'react';
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
        <AboutPage />
      </div>
    )
  }
}

export default App;
