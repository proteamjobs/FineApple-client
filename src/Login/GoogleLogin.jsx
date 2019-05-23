import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import config from '../config/config';
import './buttons.css';
import Icon from 'react-icons-kit';
import { google } from 'react-icons-kit/icomoon/google';
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
      <GoogleLogin
        clientId={GOOGLE_LOGIN_CLIENTID}
        redirectUri="http://fineapple-client.s3-website.ap-northeast-2.amazonaws.com/"
        buttonText="GOOGLE 로그인"
        onSuccess={this._googleResponse}
        onFailure={this._onFailure}
        render={renderProps => (
          <button
            className="social_login_button google_button"
            onClick={renderProps.onClick}
          >
            <Icon size={24} icon={google} style={{ marginRight: 5 }} /> Google
            로그인
          </button>
        )}
      />
    );
  }
}

export default GoogleButton;
