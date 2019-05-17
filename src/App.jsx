import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import Login from './Login/Login';
import Signup from './Signup/Singup';
import SearchResult from './SearchResult/SearchResult';
import StoreInfo from './StoreInfo/StoreInfo';
import HeartedItems from './HeartedItems/HeartedItems';
import NoMatch from './404NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/register" component={Signup} />
          <Route
            path="/searchresult/:countrycode/:storecode/:category"
            component={SearchResult}
          />
          <Route
            path="/storeinfo/:countrycode/:storecode"
            component={StoreInfo}
          />
          <Route path="/hearteditems/:userid" component={HeartedItems} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
