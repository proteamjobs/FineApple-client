import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';

function HeartedItems(props) {
  return (
    <Fragment>
      <Header />
      <Search history={props.history} />
    </Fragment>
  );
}

export default HeartedItems;
