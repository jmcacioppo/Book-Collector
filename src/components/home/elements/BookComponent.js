import React from 'react';
import { Button } from 'react-bootstrap';

const Book = ({ book, removeBook, finishedBook }) => {
  let handleRemoveBook = (book) => removeBook(book);
  let handleFinishedBook = (book) => finishedBook(book);
  
  return (
    <div className="BookContainer VerticalCenter">
      <p><strong>{book.name}</strong></p>
      <p>By: {book.author}</p>
      <p>Category: {book.category}</p>

      <div className="FlexContainer SpaceEvenly Bottom">
        <Button bsStyle="warning" onClick={handleRemoveBook.bind(null, book)}>Remove</Button>
        <Button bsStyle="success" onClick={handleFinishedBook.bind(null, book)}>Finished</Button>
      </div>
    </div>
  )
}

export default Book;
