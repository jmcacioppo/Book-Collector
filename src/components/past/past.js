import React from 'react';
import { Button } from 'react-bootstrap';
import BooksList from './elements/books-list';

class Past extends React.Component {
  render() {
    return (
      <section className="text-center">
        <h3 className="section__header">Past Books Read</h3>

        <Button active>2018</Button>
        <Button>2019</Button>
        <Button>2020</Button>

        <br />
        <br />

        <BooksList />
      </section>
    );
  }
}

export default Past;
