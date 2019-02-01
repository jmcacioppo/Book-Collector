import React from 'react';
import ModalSection from '../../../resources/elements/modal-section';

const Book = ({ book, removeBook, finishedBook }) => {
  const handleRemoveBook = book => removeBook(book);
  const handleFinishedBook = book => finishedBook(book);

  const removeBookModalBody = (
    <div>
      Are you sure you want to remove <strong>{book.name}</strong>?
    </div>
  );
  const finishedBookModalBody = (
    <div>
      Are you sure you have finished <strong>{book.name}</strong>?
    </div>
  );

  return (
    <div className="book">
      <p>
        <strong>{book.name}</strong>
      </p>
      <p>By: {book.author}</p>
      <p>Category: {book.category}</p>

      <div className="flex flex--space-evenly">
        <ModalSection
          bsStyle="warning"
          openButtonText={'Remove'}
          title={'Remove Book'}
          body={removeBookModalBody}
          actionText={'Remove Book'}
          action={handleRemoveBook.bind(null, book)}
        />

        <ModalSection
          bsStyle="success"
          openButtonText={'Finished'}
          title={'Finished Book'}
          body={finishedBookModalBody}
          actionText={'Finished Book'}
          action={handleFinishedBook.bind(null, book)}
        />
      </div>
    </div>
  );
};

export default Book;
