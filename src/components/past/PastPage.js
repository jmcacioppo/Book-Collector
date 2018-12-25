import React from 'react';
import { Button } from 'react-bootstrap';
import BookList from './elements/BookListComponent';

class Past extends React.Component {
  render() {
    return (
      <section className="TextCenter">
        <h3 className="SectionTitle">Past Books Read</h3>

        <Button active>2018</Button>
        <Button>2019</Button>
        <Button>2020</Button>

        <br />
        <br />

        <BookList></BookList>
      </section>
    )
  }
}

export default Past;
