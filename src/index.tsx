import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, BrowserRouter as ReactRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.scss';
import GuardedRoute from './components/routes/guarded-route/GuardedRoute';
import Authorize from './views/authorize/Authorize';
import Login from './views/login/Login';
import Search from './views/search/Search';
import { RouteGuards } from './types/routes/routeTypes';

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/authorize_callback">Authorize</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <GuardedRoute guard={RouteGuards.AUTHENTICATED} exact path="/">
            <Search />
          </GuardedRoute>
          <GuardedRoute path="/login">
            <Login />
          </GuardedRoute>
          <GuardedRoute path="/authorize_callback">
            <Authorize />
          </GuardedRoute>
        </Switch>
      </div>
    </ReactRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
