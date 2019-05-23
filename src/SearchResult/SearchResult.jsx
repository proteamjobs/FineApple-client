import React from 'react';
<<<<<<< HEAD

function SearchResult() {
  return <div>searchresult</div>;
=======
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
>>>>>>> 766c8b365d7e3b171f47d84d671bccd564629a58
}

export default SearchResult;
