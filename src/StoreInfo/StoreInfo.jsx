<<<<<<< HEAD
import React from 'react';

function StoreInfo() {
  return <div>StoreInfo</div>;
=======
import React, { Component, Fragment } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import GoogleMap from './GoogleMap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import styled from 'styled-components';

const StoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5vh 15vw 0 15vw;
  height: 40vh;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  font-size: 18;
  padding-top: 2em;
  margin-right: 2em;
`;

const SubTitle = styled.div`
  color: #2f3640;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Contents = styled.div`
  color: #2f3640;
  margin-bottom: ${props => (props.margin ? '15px' : '0')};
`;

export class StoreInfo extends Component {
  state = {
    onBusinessHourView: true
  };

  _toggleView = () => {
    this.setState(prevState => ({
      onBusinessHourView: !prevState.onBusinessHourView
    }));
  };

  render() {
    const {
      storeName,
      address,
      contact,
      image_url,
      way_to_come,
      storeHours,
      storeLocation
    } = this.props.location.state.storeInfo;
    const { onBusinessHourView } = this.state;
    return (
      <Fragment>
        <Header />
        <h1 style={{ textAlign: 'center', marginTop: '6vh' }}>
          {address.address}
        </h1>
        {onBusinessHourView ? (
          <StoreInfoWrapper>
            <ContentsWrapper>
              <SubTitle>주소</SubTitle>
              <Contents>{address.address2}</Contents>
              <Contents>{address.address3}</Contents>
              <Contents margin>{contact}</Contents>
              <br />
              <SubTitle>운영시간</SubTitle>
              <Contents>{storeHours.storeDays}</Contents>
              <Contents margin>{storeHours.storeTimings}</Contents>
              <Button
                onClick={this._toggleView}
                style={{ width: '6vw' }}
                color="secondary"
              >
                오시는 길
              </Button>
            </ContentsWrapper>
            <img
              style={{ width: '50vw', height: '65vh' }}
              src={image_url}
              alt={storeName}
            />
          </StoreInfoWrapper>
        ) : (
          <StoreInfoWrapper>
            <ContentsWrapper>
              <SubTitle>주소</SubTitle>
              <Contents>{address.address2}</Contents>
              <Contents>{address.address3}</Contents>
              <Contents margin>{contact}</Contents>
              <br />
              <SubTitle>찾아오시는 길</SubTitle>
              <Contents margin>{way_to_come}</Contents>
              <Button
                onClick={this._toggleView}
                style={{ width: '6vw' }}
                color="secondary"
              >
                매장 운영 시간보기
              </Button>
            </ContentsWrapper>
            <div
              id="map"
              style={{
                position: 'relative',
                width: '50vw',
                height: '65vh'
              }}
            >
              <GoogleMap
                lat={storeLocation.storelatitude}
                lng={storeLocation.storelongitude}
                storeName={storeName}
              />
            </div>
          </StoreInfoWrapper>
        )}
      </Fragment>
    );
  }
>>>>>>> 766c8b365d7e3b171f47d84d671bccd564629a58
}

export default StoreInfo;
