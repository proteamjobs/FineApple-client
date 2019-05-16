import React, { Component } from 'react';
import GooggleLogin from 'react-google-login';
import config from '../config/config';
const axios = require('axios');

const GOOGLE_LOGIN_CLIENTID = config.GOOGLE_LOGIN_CLIENTID;

export class GoogleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      name: null,
      provider: null,
      access_token: null
    };
  }

  _onFailure = err => {
    console.log(err);
  };

  _googleResponse = res => {
    console.log(res);
    let userData = {
      user_id: res.googleId,
      access_token: res.accessToken,
      provider: 'google'
    };

    localStorage.setItem('user_id', res.googleId);
    localStorage.setItem('user_email', res.profileObj.email);
    localStorage.setItem('user_image', res.profileObj.imageUrl);
    localStorage.setItem('provider', 'google');
    localStorage.setItem('access_token', res.accessToken);

    // axios.post('http://localhost:3001/auth', userData).then(result => {
    //db에 회원정보가 없을시 this.props.history.push('/register')
    //있을 시 this.props.history.push('/main')
    // });
  };

  render() {
    return (
      <GooggleLogin
        clientId={GOOGLE_LOGIN_CLIENTID}
        buttonText="Login"
        onSuccess={this._googleResponse}
        onFailure={this._onFailure}
      />
    );
  }
}

export default GoogleButton;
