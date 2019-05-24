import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
const axios = require('axios');

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f1f3f4;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 48vh;
  border: 1px solid #dfe6e9;
  border-radius: 3px;
  margin-top: 20vh;
  padding: 2.5em 0.5em;
  background-color: #fff;
`;

const Title = styled.h3`
  color: #576574;
  margin-bottom: 1.5em;
  font-weight: 600;
`;

const Contents = styled.h5`
  color: #576574;
`;

const ButtonWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
`;
class Singup extends Component {
  _onClickSignup = () => {
    let userData = {
      user_id: localStorage.user_id,
      provider: localStorage.provider,
      email: localStorage.user_email
    };

    axios.post('https://ec2.fine-apple.me/users/signup', userData).then(res => {
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
      <Container>
        <FormWrapper>
          <Title>회원가입</Title>
          <Contents>아직 회원이 아니시네요!</Contents>
          <Contents>해당 이메일로 회원가입 하시겠습니까?</Contents>
          <ButtonWrapper>
            <Button color="info" onClick={this._onClickSignup}>
              가입하기
            </Button>
            <Button color="secondary" onClick={this._onClickCancel}>
              취소하기
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </Container>
    );
  }
}

export default Singup;
