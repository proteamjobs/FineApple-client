import React, { Component } from 'react';
import GooggleLogin from 'react-google-login';
import config from '../config/config';
import './buttons.css';
const axios = require('axios');

const GOOGLE_LOGIN_CLIENTID = config.GOOGLE_LOGIN_CLIENTID;

export class GoogleButton extends Component {
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

    axios.post('http://13.125.34.37:3001/users/auth', userData).then(result => {
      if (!result.data.isMember) {
        this.props.history.push('/register');
      } else {
        console.log(typeof result.data.userDB_id);
        localStorage.setItem('userDB_id', result.data.userDB_id);
        this.props.history.push('/main');
      }
    });
  };

  render() {
    return (
      <GooggleLogin
        clientId={GOOGLE_LOGIN_CLIENTID}
        buttonText="GOOGLE 로그인"
        onSuccess={this._googleResponse}
        onFailure={this._onFailure}
        className="google_button"
      />
    );
  }
}

export default GoogleButton;
