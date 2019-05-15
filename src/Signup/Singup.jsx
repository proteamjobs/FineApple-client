import React, { Component, Fragment } from 'react';
import { Button, Card, CardTitle, CardText, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

class Singup extends Component {
  _onClickSignup = () => {
    let userData = {
      id: localStorage.user_id,
      provider: localStorage.provider
    };

    //axios.post('http://localhost:3001/signup', userData).then(res =>
    //res가 OK이면 this.props.history.push('/main');
    //err일시 console.log(err)
    this.props.history.push('/main');
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
