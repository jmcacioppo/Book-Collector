import React from 'react';
import BooksList from './elements/books-list';
import SelectBook from './elements/select-book';
import ModalSection from '../../resources/elements/modal-section';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const today = new Date();
const monthToday = monthNames[today.getMonth()];

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          key: 0,
          name: `You Don't Know JS`,
          category: 'development',
          author: 'Kyle Simpson',
        },
        {
          key: 1,
          name: 'Total Money Makeover',
          category: 'money',
          author: 'Dave Ramsey',
        },
        {
          key: 2,
          name: 'The 7 Habits of Highly Effective People',
          category: 'professional',
          author: 'Stephen Covey',
        },
      ],
      modalBody: this.modalBody(),
      selectedBook: {},
    };
  }

  modalBody() {
    const options = ['Example 1', 'Example 2', 'Example 3'];

    let setSelectedBook = selectedBook => this.setState({ selectedBook });

    return (
      <div>
        <p>Select the book you'd like to add.</p>
        <SelectBook options={options} setSelectedBook={setSelectedBook} />
      </div>
    );
  }

  handleRemoveBook(book) {
    console.log(`Removing ${book.name}`);
  }

  handleFinishedBook(book) {
    console.log(`Finishing ${book.name}`);
  }

  handleAddBook() {
    console.log(`Adding ${this.state.selectedBook}`);
  }

  render() {
    return (
      <section className="text-center section">
        <h2 className="section__header">{monthToday} Books</h2>

        <BooksList
          books={this.state.books}
          removeBook={this.handleRemoveBook}
          finishedBook={this.handleFinishedBook}
        />

        <br />

        <ModalSection
          openButtonText={'Add Book'}
          title={'Add Book'}
          body={this.state.modalBody}
          actionText={'Add Book'}
          action={this.handleAddBook.bind(this)}
        />
      </section>
    );
  }
}

export default Home;
