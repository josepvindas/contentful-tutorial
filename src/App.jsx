import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Card, Col } from 'react-bootstrap';

import Client from './components/Contentful';
import { data } from './actions';
import Styles from './components/Styles';
import NavBar from './components/Nav';

function App() {
  const dispatch = useDispatch();
  Client.getEntries({
    content_type: 'book'
  })
    .then(response => {
      dispatch(data(response.items));
      console.log(response.items);
    })
    .catch(console.error);

  const books = useSelector(state => state.data);

  const items = books.map(book => (
    <Card className='book-card'>
      <Card.Img
        variant='top'
        src={book.fields.cover.fields.file.url}
        className='book-cover'
      />
      <Card.Body>
        <Card.Title className='book-title'>{book.fields.name}</Card.Title>
        <Card.Text className='book-price'>${book.fields.price}</Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <Styles>
      <NavBar />
      <Row className='book-list'>{items}</Row>
    </Styles>
  );
}

export default App;
