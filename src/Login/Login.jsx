import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from './GoogleLogin';
import FacebookButton from './FacebookLogin';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <FacebookButton history={this.props.history} />
            <Link to="/main">
              <Button color="secondary">로그인하지 않고 둘러보기</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
