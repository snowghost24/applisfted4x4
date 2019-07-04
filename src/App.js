import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import * as routes from './constants/routes';

import AsyncComponent from './HOC/asyncComponent';
const AsyncMainPage = AsyncComponent(() => {
  return import('./pages/MainPage')
})
// import logo from './logo.svg';
// hide the original css
// import './App.css';
// this means that this function is only imported 
// when the component is rendered

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}${routes.LANDING}`}
          render={() => <Redirect to={`${routes.ALL_PRODUCTS}`} />} />
        <AsyncMainPage />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

