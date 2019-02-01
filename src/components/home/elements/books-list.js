import React from 'react';
import Book from './book';

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookItems: this.props.books.map(book => (
        <Book
          book={book}
          key={book.key}
          removeBook={this.props.removeBook}
          finishedBook={this.props.finishedBook}
        />
      )),
    };
  }

  render() {
    return <div className="BooksContainer">{this.state.bookItems}</div>;
  }
}

export default BooksList;
