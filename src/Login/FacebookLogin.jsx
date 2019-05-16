import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import config from '../config/config';

const axios = require('axios');
const FACEBOOK_APP_ID = config.FACEBOOK_APP_ID;

export class FacebookButton extends Component {
  constructor(props) {
    super(props);
  }

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

    //axios.post('http://localhost:3001/auth', userData).then(res => )
    //db에 회원정보가 없을시 this.props.history.push('/register')
    //있을 시 this.props.history.push('/main')
    // });
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
