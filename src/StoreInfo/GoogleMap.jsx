import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const config = require('../config/config.json');

const GOOGLE_API = config.GOOGLE_API;

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: null
    };
  }

  _onMarkerClick = (props, marker, e) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    });

  _onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 37.52,
          lng: 127.022
        }}
      >
        <Marker
          onClick={this._onMarkerClick}
          name={'Apple'}
          position={{ lat: this.props.lat, lng: this.props.lng }}
          icon={{
            url: 'https://t7.rbxcdn.com/4fcedcc22a2308067b295bc3257f5631',
            anchor: new window.google.maps.Point(32, 32),
            scaledSize: new window.google.maps.Size(40, 40)
          }}
        />
        <InfoWindow
          onClose={this._onClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h3>{this.props.storeName}</h3>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API
})(GoogleMap);
