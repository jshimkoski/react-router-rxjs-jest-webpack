import React from 'react';
import {Route, IndexRoute} from 'react-router'

import Root from 'routes/root/root.route';
import Home from 'routes/home/home.route';
import About from 'routes/about/about.route';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
  </Route>
);