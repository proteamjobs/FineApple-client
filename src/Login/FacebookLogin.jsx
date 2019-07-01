import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import config from '../config/config';
import './buttons.css';
import Icon from 'react-icons-kit';
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial';
const axios = require('axios');
const FACEBOOK_APP_ID = config.FACEBOOK_APP_ID;

export class FacebookButton extends Component {
  _responseFacebook = res => {
    console.log(res);
    let userData = {
      user_id: res.id,
      access_token: res.accessToken,
      provider: 'facebook'
    };

    localStorage.setItem('user_id', res.id);
    localStorage.setItem('user_email', res.email);
    localStorage.setItem('user_image', res.picture.data.url);
    localStorage.setItem('provider', 'facebook');
    localStorage.setItem('access_token', res.accessToken);
    localStorage.setItem('user_name', res.name);

    axios
      .post('https://ec2.fine-apple.me/users/auth', userData)
      .then(result => {
        if (!result.data.isMember) {
          this.props.history.push('/register');
        } else {
          localStorage.setItem('userDB_id', result.data.userDB_id);
          this.props.history.push('/main');
        }
      });
  };

  render() {
    return (
      <FacebookLogin
        appId={FACEBOOK_APP_ID}
        fields="name,email,picture"
        callback={this._responseFacebook}
        icon={
          <Icon size={24} icon={facebookOfficial} style={{ marginRight: 5 }} />
        }
        textButton=" Facebook 로그인"
        cssClass="social_login_button facebook_button"
      />
    );
  }
}

export default FacebookButton;
