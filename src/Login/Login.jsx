import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from './GoogleLogin';
import FacebookButton from './FacebookLogin';
import { Container, Row, Col, Button } from 'reactstrap';
import logo from '../img/logo_white.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export class Login extends Component {
  render() {
    return (
      <Container fluid style={{ margin: 0, padding: 0 }}>
        <Row style={{ margin: 0, width: '100vw', height: '100vh' }}>
          <Col
            xs="5"
            style={{
              backgroundColor: '#2c3e50'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20vh'
              }}
            >
              <img alt="logo" src={logo} />
              <div style={{}}>
                <div
                  style={{
                    color: 'white',
                    fontSize: 28,
                    marginTop: '2em',
                    marginBottom: '0.5em',
                    fontWeight: 400
                  }}
                >
                  전 세계 Apple 매장의 재고를
                </div>
                <div style={{ color: 'white', fontSize: 30, fontWeight: 400 }}>
                  실시간으로 확인하세요!
                </div>
              </div>
            </div>
          </Col>
          <Col xs="7">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '15vh'
              }}
            >
              <h2>지금 바로 가입하세요</h2>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  border: '1px solid #b2bec3',
                  borderRadius: 3,
                  width: '50%',
                  height: '50vh',
                  marginTop: '5vh',
                  padding: '10vh'
                }}
              >
                <GoogleButton history={this.props.history} />
                <FacebookButton history={this.props.history} />
                <Link to="/main">
                  <Button color="secondary" style={{ width: '20vw' }}>
                    로그인하지 않고 둘러보기
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
