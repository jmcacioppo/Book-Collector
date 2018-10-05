import React from 'react';
import Books from "./elements/BooksComponent";
import ModalComponent from "../resources/modal/ModalComponent";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let today = new Date();
let monthToday = monthNames[today.getMonth()];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { key: 0, name: `You Don't Know JS`, category: 'development', author: 'Kyle Simpson' }, 
        { key: 1, name: 'Total Money Makeover', category: 'money', author: 'Dave Ramsey' },
        { key: 2, name: 'The 7 Habits of Highly Effective People', category: 'professional', author: 'Stephen Covey' }
      ]
    }
  }
  
  render() {
    return (
      <section className="TextCenter SectionContainer">
        <h2 className="SectionTitle">{monthToday} Books</h2>

        <Books books={this.state.books}/>

        <br />
        <ModalComponent />
      </section>
    )
  }
}

export default Home;
