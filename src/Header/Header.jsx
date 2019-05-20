import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import UserButton from './UserButton';
import { Row } from 'reactstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo_white.png';

function Header() {
  return (
    <Row
      style={{
        height: '10vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        paddingLeft: '5vw',
        paddingRight: '5vw'
      }}
    >
      <Link to="/main">
        <img alt="logo" src={logo} style={{ width: '13rem' }} />
      </Link>
      {localStorage.access_token ? <UserButton /> : <LoginButton />}
    </Row>
  );
}

export default Header;
