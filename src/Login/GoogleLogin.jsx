import React, { Component, Fragment } from 'react';
import GooggleLogin from 'react-google-login';
import config from '../../config/config.json';
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
      name: res.profileObj.familyName + res.profileObj.givenName,
      imageUrl: res.profileObj.imageUrl,
      access_token: res.accessToken,
      provider: 'google'
    };

    localStorage.setItem('user_id', res.googleId);
    localStorage.setItem(
      'user_name',
      res.profileObj.familyName + res.profileObj.givenName
    );
    localStorage.setItem('provider', 'google');
    localStorage.setItem('access_token', res.accessToken);

    // axios.post('http://localhost:3001/auth', userData).then(result => {
    //db에 회원정보가 있을시 this.props.history.push('/register')
    //없을 시 this.props.history.push('/main')
    // });
  };

  render() {
    return (
      <Fragment>
        <GooggleLogin
          clientId={GOOGLE_LOGIN_CLIENTID}
          buttonText="Login"
          onSuccess={this._googleResponse}
          onFailure={this._onFailure}
        />
      </Fragment>
    );
  }
}

export default GoogleButton;
