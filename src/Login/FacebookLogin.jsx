import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import config from '../config/config';

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

    axios.post('http://13.125.34.37:3001/users/auth', userData).then(result => {
      if (!result.data.isMember) {
        this.props.history.push('/register');
      } else {
        this.props.history.push('/main');
      }
    });
  };

  render() {
    return (
      <FacebookLogin
        appId={FACEBOOK_APP_ID}
        // autoLoad={true}
        fields="name,email,picture"
        callback={this._responseFacebook}
        // cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
    );
  }
}

export default FacebookButton;
