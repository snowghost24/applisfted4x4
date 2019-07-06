import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import * as routes from './constants/routes';

import AsyncComponent from './HOC/asyncComponent';

const AsyncMainPage = AsyncComponent(() => {
  return import('./pages/MainPage')
})

const AsyncLoginPage = AsyncComponent(() => {
  return import('./pages/LoginPage')
})

const AsyncPasswordChange = AsyncComponent(() => {
  return import('./pages/PasswordChangePage')
})

const AsyncPasswordRecover = AsyncComponent(() => {
  return import('./pages/PasswordRecoveryPage')
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
        <Route exact path={`${process.env.PUBLIC_URL}${routes.LANDING}`} render={() => <AsyncMainPage />} />
        <Route exact path={`${process.env.PUBLIC_URL}${routes.LOGINFORM}`} render={() => <AsyncLoginPage />} />
        <Route exact path={`${process.env.PUBLIC_URL}${routes.PASS_CHANGE}`} render={() => <AsyncPasswordChange />} />
        <Route exact path={`${process.env.PUBLIC_URL}${routes.RECOVERPASSWORD}`} render={() => <AsyncPasswordRecover />} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

