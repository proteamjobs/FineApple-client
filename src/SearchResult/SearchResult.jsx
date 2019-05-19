import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import {
  CardDeck,
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Badge
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from 'react-icons-kit';
import { heart } from 'react-icons-kit/fa/heart';
const axios = require('axios');

class SearchResult extends Component {
  _onClickHeart = e => {
    e.persist();

    let heartColor = e.target.parentNode.parentNode.style.color;
    let productID = Number(
      e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('value')
    );
    if (localStorage.access_token) {
      if (productID !== 0) {
        let body = {
          userID: Number(localStorage.userDB_id),
          storeID: this.props.location.state.result[0].storeID,
          productID: productID
        };

        console.log(body);
        //찜삭제
        if (heartColor === 'rgb(234, 134, 133)') {
          axios
            .delete('http://13.125.34.37:3001/heartedItems/delete', {
              data: body
            })
            .then(result => {
              // console.log(result);
              if (result.status === 201) {
                e.target.parentNode.parentNode.style.color =
                  'rgb(178, 190, 195)';
              }
            })
            .catch(err => console.log(err));
          //찜등록
        } else if (heartColor === 'rgb(178, 190, 195)') {
          axios
            .post('http://13.125.34.37:3001/heartedItems/add', body)
            .then(result => {
              // console.log(result);
              if (result.status === 201) {
                e.target.parentNode.parentNode.style.color =
                  'rgb(234, 134, 133)';
              }
            })
            .catch(err => console.log(err));
        }
      }
    } else {
      alert('찜하기는 로그인 시에만 가능합니다!');
    }
  };

  _onClickStoreInfo = () => {
    let { storeCode, countryCode } = this.props.location.state.result[0];

    axios
      .get(
        `http://13.125.34.37:3001/stores/info?countryCode=${countryCode}&storeCode=${storeCode}`
      )
      .then(res =>
        this.props.history.push({
          pathname: `/storeinfo/${countryCode}/${storeCode}`,
          state: {
            storeInfo: res.data
          }
        })
      );
  };

  render() {
    const products = this.props.location.state.result;

    return (
      <Fragment>
        <Header />
        <Search history={this.props.history} />
        <CardDeck>
          {products.map(product => (
            <Card value={product.productID}>
              <CardBody>
                {product.isHearted ? (
                  <Icon
                    onClick={this._onClickHeart}
                    size={30}
                    icon={heart}
                    style={{ color: '#ea8685' }}
                  />
                ) : (
                  <Icon
                    onClick={this._onClickHeart}
                    size={30}
                    icon={heart}
                    style={{ color: '#b2bec3' }}
                  />
                )}

                <CardImg
                  top
                  width="100px"
                  height="100px"
                  src={product.imageUrl}
                  alt={product.modelName}
                />

                <CardTitle>{product.modelName}</CardTitle>
                {product.isPickupAvailable ? (
                  <Badge color="success" pill>
                    픽업 가능
                  </Badge>
                ) : (
                  <Badge color="danger" pill>
                    픽업 불가능
                  </Badge>
                )}
                <CardText>{product.storeName}</CardText>
                <Button onClick={this._onClickStoreInfo} color="secondary">
                  매장정보
                </Button>
              </CardBody>
            </Card>
          ))}
        </CardDeck>
      </Fragment>
    );
  }
}

export default SearchResult;
