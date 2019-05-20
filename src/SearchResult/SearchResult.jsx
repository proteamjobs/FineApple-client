import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Products from '../Products/Products';

function SearchResult(props) {
  return (
    <Fragment>
      <Header />
      <Search history={props.history} />
      <Products
        products={props.location.state.result}
        history={props.history}
      />
    </Fragment>
  );
}

export default SearchResult;
