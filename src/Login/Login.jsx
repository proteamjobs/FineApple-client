import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from './GoogleLogin';
import FacebookButton from './FacebookLogin';

export class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Fine | Apple</h2>
          <div>intro blablabla...</div>
        </div>
        <div>
          <h2>지금 바로 가입하세요</h2>
          <div>
            <GoogleButton history={this.props.history} />
            <FacebookButton />
            <Link to="/main">
              <button>로그인하지 않고 둘러보기</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
