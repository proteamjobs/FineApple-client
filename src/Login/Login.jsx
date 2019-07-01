import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import GoogleButton from './GoogleLogin';
import FacebookButton from './FacebookLogin';
import { Container, Row, Col, Button } from 'reactstrap';
import logo from '../img/logo_white.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Wrapper = styled(Row)`
  && {
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: #f1f3f4;
  }
`;

const LeftWing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const RightWing = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dfe6e9;
  border-radius: 3px;
  height: 30rem;
  max-width: 24rem;
  margin-top: 5vh;
  padding: 4rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1.5px 1.5px 0px;
`;

const Intro1 = styled.div`
  color: white;
  font-size: 28px;
  margin-top: 2em;
  margin-bottom: 0.5em;
  font-weight: 400;
`;

const Intro2 = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: 400;
`;

const CallToAction = styled.h2`
  text-align: center;
`;

const WithoutLoginButton = styled(Button)`
  width: 100%;
  min-width: 15rem;
  max-width: 16rem;
  height: 5rem;
  font-family: Helvetica, sans-serif;
  font-weight: 500;
  text-align: left;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 10px 20px;
  transition: background-color 0.3s, border-color 0.3s;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
  border-radius: 2px;
`;

export class Login extends Component {
  render() {
    let isLogin = localStorage.access_token ? true : false;
    console.log(isLogin);

    return isLogin ? (
      <Redirect to="/main" />
    ) : (
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Wrapper>
          <Col
            xs="12"
            sm="4"
            md="5"
            style={{
              backgroundColor: '#2c3e50'
            }}
          >
            <LeftWing>
              <img alt="logo" src={logo} style={{ width: '25vw' }} />
              <Intro1>전 세계 Apple 매장의 재고를</Intro1>
              <Intro2>실시간으로 확인하세요!</Intro2>
            </LeftWing>
          </Col>
          <Col xs="12" sm="8" md="7">
            <RightWing>
              <CallToAction>지금, 바로 가입하세요</CallToAction>
              <ButtonWrapper>
                <GoogleButton history={this.props.history} />
                <FacebookButton history={this.props.history} />
                <Link to="/main">
                  <WithoutLoginButton color="secondary">
                    로그인하지 않고 둘러보기
                  </WithoutLoginButton>
                </Link>
              </ButtonWrapper>
            </RightWing>
          </Col>
        </Wrapper>
      </Container>
    );
  }
}

export default Login;
