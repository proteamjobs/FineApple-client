import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import UserButton from './UserButton';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <Fragment>
      <Link to="/main">Fine|Apple</Link>
      {localStorage.access_token ? <UserButton /> : <LoginButton />}
    </Fragment>
  );
}

export default Header;
