import React from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let today = new Date();
let monthToday = monthNames[today.getMonth()];

class Home extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="TextCenter">
        <h3 className="SectionTitle">{monthToday} Books</h3>
      </div>
    )
  }
}

export default Home;
