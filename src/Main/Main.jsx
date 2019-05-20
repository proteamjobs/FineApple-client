import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main(props) {
  return (
    <Container fluid style={{ margin: 0 }}>
      <Header />
      <Search history={props.history} />
    </Container>
  );
}

export default Main;
