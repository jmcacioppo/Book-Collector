import React from 'react';
import Books from "./elements/BooksComponent";
import SelectBook from "./elements/SelectBookComponent";
import ModalComponent from "../../resources/elements/ModalComponent";

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
      ],
      modalBody: this.modalBody()
    }
  }
  
  modalBody() {
    const options = ['Example 1', 'Example 2', 'Example 3'];

    return (
      <div>
        <p>Select the book you'd like to add.</p>
        <SelectBook options={options}></SelectBook>
      </div>
    )
  }

  handleRemoveBook(book) {
    console.log(`Removing ${book.name}`);
  }
  
  handleFinishedBook(book) {
    console.log(`Finishing ${book.name}`);
  }

  handleAddBook() {
    console.log(`Add ${this.selectedBook}`);
  }
  
  render() {
    return (
      <section className="TextCenter SectionContainer">
        <h2 className="SectionTitle">{monthToday} Books</h2>

        <Books books={this.state.books} removeBook={this.handleRemoveBook} finishedBook={this.handleFinishedBook}/>

        <br />

        <ModalComponent 
          openButtonText={'Add Book'} 
          title={'Add Book'} 
          body={this.state.modalBody} 
          actionText={'Add Book'}
          action={this.handleAddBook}/>
      </section>
    )
  }
}

export default Home;
