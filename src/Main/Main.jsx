import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import { Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  return (
    <Fragment>
      <Header />
      <Search />
    </Fragment>
  );
}

export default Main;
