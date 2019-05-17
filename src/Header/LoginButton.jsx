import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function LoginButton() {
  return (
    <Link to="/">
      <Button color="info">로그인</Button>
    </Link>
  );
}

export default LoginButton;
