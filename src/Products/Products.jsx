import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Badge
} from 'reactstrap';
import Icon from 'react-icons-kit';
import { heart } from 'react-icons-kit/fa/heart';
import styled from 'styled-components';
const axios = require('axios');

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5vh 0 10vh 0;
  text-align: center;
  padding: 0 10vw 0 10vw;
`;

const NoResult = styled.h5`
  margin-top: 12vh;
  text-align: center;
  color: #636e72;
`;

export class Products extends Component {
  _onClickHeart = e => {
    e.persist();
    let heartColor = e.target.parentNode.parentNode.style.color;
    let { productID, storeID } = JSON.parse(
      e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('value')
    );

    if (localStorage.access_token) {
      if (productID !== 0) {
        let body = {
          userID: Number(localStorage.userDB_id),
          productID: Number(productID),
          storeID: Number(storeID)
        };

        // console.log(body);
        //찜삭제
        if (heartColor === 'rgb(234, 134, 133)') {
          axios
            .delete('https://ec2.fine-apple.me/heartedItems/delete', {
              data: body
            })
            .then(result => {
              if (result.status === 201) {
                e.target.parentNode.parentNode.style.color =
                  'rgb(178, 190, 195)';
              }
            })
            .catch(err => console.log(err));
          //찜등록
        } else if (heartColor === 'rgb(178, 190, 195)') {
          axios
            .post('https://ec2.fine-apple.me/heartedItems/add', body)
            .then(result => {
              //   console.log(result);
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

  _onClickStoreInfo = e => {
    e.persist();
    let { storeCode, countryCode } = JSON.parse(
      e.target.parentNode.parentNode.getAttribute('value')
    );
    axios
      .get(
        `https://ec2.fine-apple.me/stores/info?countryCode=${countryCode}&storeCode=${storeCode}`
      )
      .then(res => {
        // console.log(res.data);
        this.props.history.push({
          pathname: `/storeinfo/${countryCode}/${storeCode}`,
          state: {
            storeInfo: res.data
          }
        });
      });
  };

  render() {
    const products = this.props.products;
    return products.length ? (
      <CardWrapper>
        {products.map(product => (
          <Card
            style={{ width: 300, margin: 12 }}
            value={JSON.stringify({
              productID: product.productID,
              storeCode: product.storeCode,
              countryCode: product.countryCode,
              storeID: product.storeID
            })}
          >
            <CardBody>
              {product.isHearted ? (
                <Icon
                  onClick={this._onClickHeart}
                  size={30}
                  icon={heart}
                  style={{ color: '#ea8685', float: 'right' }}
                />
              ) : (
                <Icon
                  onClick={this._onClickHeart}
                  size={30}
                  icon={heart}
                  style={{ color: '#b2bec3', float: 'right' }}
                />
              )}

              <CardImg
                top
                height="200"
                // style={{ width: '80%' }}
                src={product.imageUrl}
                alt={product.modelName}
              />

              <CardTitle style={{ fontWeight: 500, marginTop: 5 }}>
                {product.modelName}
              </CardTitle>
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
              <Button
                onClick={this._onClickStoreInfo}
                color="secondary"
                style={{ marginBottom: 10 }}
              >
                매장정보
              </Button>
            </CardBody>
          </Card>
        ))}
      </CardWrapper>
    ) : (
      <NoResult>검색 결과가 없습니다.</NoResult>
    );
  }
}

export default Products;
