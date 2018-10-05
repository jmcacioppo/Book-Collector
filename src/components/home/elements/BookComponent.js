import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="BookContainer">
      <p><strong>{book.name}</strong></p>
      <p>By: {book.author}</p>
      <p>Category: {book.category}</p>
    </div>
  )
}

export default Book;
