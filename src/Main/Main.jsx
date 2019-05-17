import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main(props) {
  return (
    <Fragment>
      <Header />
      <Search history={props.history} />
    </Fragment>
  );
}

export default Main;
