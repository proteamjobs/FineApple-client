import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Products from '../Products/Products';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const axios = require('axios');

class HeartedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://13.125.34.37:3001/heartedItems/list?userID=${
          localStorage.userDB_id
        }`
      )
      .then(result => {
        // console.log(result);
        this.setState({
          productList: result.data.heartedItems
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { productList } = this.state;
    const { history } = this.props;

    return productList ? (
      <Fragment>
        <Header />
        <Search history={history} />
        <Products history={history} products={productList} />
      </Fragment>
    ) : (
      <Spinner
        color="secondary"
        style={{ marginTop: '40vh', marginLeft: '48vw' }}
      />
    );
  }
}

export default HeartedItems;
