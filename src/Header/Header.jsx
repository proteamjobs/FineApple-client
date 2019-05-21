import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import UserButton from './UserButton';
import { Row } from 'reactstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/logo_white.png';
import styled from 'styled-components';

const HeaderWrapper = styled(Row)`
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.main ? '#2c3e5050' : '#2c3e50')};
  padding-left: 5vw;
  padding-right: 5vw;
  z-index: 1;
`;

function Header(props) {
  return (
    <HeaderWrapper main={props.main ? true : false}>
      <Link to="/main">
        <img alt="logo" src={logo} style={{ width: '13rem' }} />
      </Link>
      {localStorage.access_token ? <UserButton /> : <LoginButton />}
    </HeaderWrapper>
  );
}

export default Header;
