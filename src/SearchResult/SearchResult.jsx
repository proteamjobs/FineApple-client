import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Products from '../Products/Products';
import { Container } from 'reactstrap';

function SearchResult(props) {
  return (
    <Container fluid style={{ margin: 0 }}>
      <Header />
      <Search history={props.history} />
      <Products
        products={props.location.state.result}
        history={props.history}
      />
    </Container>
  );
}

export default SearchResult;
