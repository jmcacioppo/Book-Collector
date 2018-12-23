import React from 'react';
import ModalComponent from "../../../resources/elements/ModalComponent";

const Book = ({ book, removeBook, finishedBook }) => {
  const handleRemoveBook = (book) => removeBook(book);
  const handleFinishedBook = (book) => finishedBook(book);
  
  const removeBookModalBody = <div>Are you sure you want to remove <strong>{book.name}</strong>?</div>
  const finishedBookModalBody = <div>Are you sure you have finished <strong>{book.name}</strong>?</div>

  return (
    <div className="BookContainer VerticalCenter">
      <p><strong>{book.name}</strong></p>
      <p>By: {book.author}</p>
      <p>Category: {book.category}</p>

      <div className="FlexContainer SpaceEvenly Bottom">
        <ModalComponent
          bsStyle="warning"
          openButtonText={'Remove'}
          title={'Remove Book'}
          body={removeBookModalBody}
          actionText={'Remove Book'}
          action={handleRemoveBook.bind(null, book)} />
        
        <ModalComponent
          bsStyle="success"
          openButtonText={'Finished'}
          title={'Finished Book'}
          body={finishedBookModalBody}
          actionText={'Finished Book'}
          action={handleFinishedBook.bind(null, book)} />
      </div>
    </div>
  )
}

export default Book;
