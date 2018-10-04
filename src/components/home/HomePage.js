import React from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
let today = new Date();
let monthToday = monthNames[today.getMonth()];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { key: 0, name: 'YDKJS', category: 'development', author: 'Kyle Simpson' }, 
        { key: 1, name: 'Total Money Makeover', category: 'money', author: 'Dave Ramsey' }
      ]
    }
  }
  
  render() {
    return (
      <section className="TextCenter SectionContainer">
        <h3 className="SectionTitle">{monthToday} Books</h3>

        <Books books={this.state.books}/>
      </section>
    )
  }
}

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookItems: this.props.books.map((item) => <Book book={item} key={item.key}/>)
    }
  }

  render() {
    return (
      <div className="BooksContainer">
        {this.state.bookItems}
      </div>
    )
  }
}

const Book = ({ book }) => {
  return (
    <div className="BookContainer">
      <p>Book Title: {book.name}</p>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
    </div>
  )
}

export default Home;
