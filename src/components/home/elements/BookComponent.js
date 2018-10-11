import React from 'react';
import { Button } from 'react-bootstrap';

const Book = ({ book }) => {
  return (
    <div className="BookContainer VerticalCenter">
      <p><strong>{book.name}</strong></p>
      <p>By: {book.author}</p>
      <p>Category: {book.category}</p>

      <div className="FlexContainer SpaceEvenly Bottom">
        <Button bsStyle="warning">Remove</Button>
        <Button bsStyle="success">Finished</Button>
      </div>
    </div>
  )
}

export default Book;
