import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  background: #2c3e50;
  color: white
  font-size: 1em;
  font-weight: 600;
  margin: 1em;
  padding: 0.3em 1em;
  border: 1.5px solid white;
  border-radius: 3px;
  
  :hover {
    background: #ecf0f1;
    color: #2c3e50;
    font-weight: 600;
  }
`;

function LoginButton() {
  return (
    <Link to="/">
      <Button>로그인</Button>
    </Link>
  );
}

export default LoginButton;
