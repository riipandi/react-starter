import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import Home from "./page/Home";
import Example from "./page/Example";
import Notfound from "./page/Notfound";

import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/example" component={Example} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
