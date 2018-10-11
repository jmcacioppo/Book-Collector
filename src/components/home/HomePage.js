import React from 'react';
import Books from "./elements/BooksComponent";
import SelectBook from "./elements/SelectBookComponent";
import ModalComponent from "../resources/elements/ModalComponent";

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
    return (
      <div>
        <h4>Book List:</h4>
        <p>Select the book you'd like to add.</p>
        <SelectBook></SelectBook>
      </div>
    )
  }

  handleAddBook() {
    console.log('Add this book!');
  }
  
  render() {
    return (
      <section className="TextCenter SectionContainer">
        <h2 className="SectionTitle">{monthToday} Books</h2>

        <Books books={this.state.books}/>

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
