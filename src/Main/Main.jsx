import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../img/background_city.jpg';

function Main(props) {
  return (
    <div
      style={{
        margin: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%'
      }}
    >
      <Container fluid>
        <Header main />
      </Container>
      <Container fluid style={{ maxWidth: 1110 }}>
        <Search main history={props.history} />
      </Container>
    </div>
  );
}

export default Main;
