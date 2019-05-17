import React, { Component, Fragment } from 'react';
import { Button, Card, CardTitle, CardText, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

class Singup extends Component {
  _onClickSignup = () => {
    let userData = {
      user_id: localStorage.user_id,
      provider: localStorage.provider
    };

    axios.post('http://13.125.34.37:3001/users/signup', userData).then(res => {
      if (res.data === 'Done') {
        this.props.history.push('/main');
      } else {
        alert('다시 시도해주세요');
        this.props.history.push('/');
      }
    });
  };

  _onClickCancel = () => {
    localStorage.clear();
    this.props.history.push('/');
  };

  render() {
    return (
      <Fragment>
        <Card>
          <CardTitle>회원가입</CardTitle>
          <CardText>
            아직 회원이 아니시네요. 해당 이메일로 회원가입 하시겠습니까?
          </CardText>
          <Row>
            <Button color="info" onClick={this._onClickSignup}>
              가입하기
            </Button>
            <Button color="secondary" onClick={this._onClickCancel}>
              취소하기
            </Button>
          </Row>
        </Card>
      </Fragment>
    );
  }
}

export default Singup;
