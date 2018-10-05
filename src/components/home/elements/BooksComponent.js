import React from 'react';
import Book from "./BookComponent";

class Books extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookItems: this.props.books.map((item) => <Book book={item} key={item.key} />)
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

export default Books;
