import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Home from 'routes/home/home.route';
import About from 'routes/about/about.route';

const root = document.createElement('div');
document.body.appendChild(root);

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </Router>
), root);