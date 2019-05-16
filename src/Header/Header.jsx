import React from 'react';
import { Container, Row } from 'reactstrap';
import LoginButton from './LoginButton';
import UserButton from './UserButton';
import './style.css';

function Header() {
  return (
    <Row>
      <div>Fine|Apple</div>
      {localStorage.access_token ? <UserButton /> : <LoginButton />}
    </Row>
  );
}

export default Header;
