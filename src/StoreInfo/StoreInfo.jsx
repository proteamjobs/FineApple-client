import React, { Component, Fragment } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import GoogleMap from './GoogleMap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <h2>{address.address}</h2>
        {onBusinessHourView ? (
          <Container>
            <Row>
              <Col>
                <Col>
                  <div>주소 :</div>
                  <div>{address.address2}</div>
                  <div>{address.address3}</div>
                  <div>{contact}</div>
                </Col>
                <br />
                <Col>
                  <div>운영시간 :</div>
                  <div>{storeHours.storeDays}</div>
                  <div>{storeHours.storeTimings}</div>
                </Col>
                <Button onClick={this._toggleView} color="secondary">
                  오시는 길
                </Button>
              </Col>
              <img src={image_url} alt={storeName} />
            </Row>
          </Container>
        ) : (
          <Container>
            <Row>
              <Col>
                <Col>
                  <div>주소 :</div>
                  <div>{address.address2}</div>
                  <div>{address.address3}</div>
                  <div>{contact}</div>
                </Col>
                <br />
                <Col>
                  <div>찾아오시는 길 :</div>
                  <div>{way_to_come}</div>
                </Col>
                <Button onClick={this._toggleView} color="secondary">
                  매장 운영시간 보기
                </Button>
              </Col>
              <div
                style={{
                  position: 'relative',
                  width: '800px',
                  height: '500px'
                }}
              >
                <GoogleMap
                  lat={storeLocation.storelatitude}
                  lng={storeLocation.storelongitude}
                  storeName={storeName}
                />
              </div>
            </Row>
          </Container>
        )}
      </Fragment>
    );
  }
}

export default StoreInfo;
