import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #dfe6e9;
  border-radius: 3px;
  width: 50%;
  height: 50vh;
  margin-top: 5vh;
  padding: 10vh;
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
  font-size: 30px;
  font-weight: 400;
`;

export class Login extends Component {
  render() {
    return (
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Wrapper>
          <Col
            xs="5"
            style={{
              backgroundColor: '#2c3e50'
            }}
          >
            <LeftWing>
              <img alt="logo" src={logo} />
              <Intro1>전 세계 Apple 매장의 재고를</Intro1>
              <Intro2>실시간으로 확인하세요!</Intro2>
            </LeftWing>
          </Col>
          <Col xs="7">
            <RightWing>
              <h2>지금, 바로 가입하세요</h2>
              <ButtonWrapper>
                <GoogleButton history={this.props.history} />
                <FacebookButton history={this.props.history} />
                <Link to="/main">
                  <Button
                    color="secondary"
                    style={{ width: '20vw', height: '5vh', marginTop: 20 }}
                  >
                    로그인하지 않고 둘러보기
                  </Button>
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
