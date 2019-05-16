import React from 'react';
import { Link } from 'react-router-dom';

function LoginButton() {
  return (
    <Link to="/">
      <button>로그인</button>
    </Link>
  );
}

export default LoginButton;
