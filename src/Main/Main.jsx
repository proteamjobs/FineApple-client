import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../img/background_city.jpg';

function Main(props) {
  return (
    <Container
      fluid
      style={{
        margin: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%'
      }}
    >
      <Header main />
      <Search main history={props.history} />
    </Container>
  );
}

export default Main;
