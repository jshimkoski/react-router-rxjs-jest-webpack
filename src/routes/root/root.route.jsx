import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router'

import RootComponent from 'routes/root/root.component';
import HomeComponent from 'routes/home/home.component';
import AboutComponent from 'routes/about/about.component';

export default (
  <Route path="/" component={RootComponent}>
    <IndexRoute component={HomeComponent}/>
    <Route path="/home" component={HomeComponent}/>
    <Route path="/about" component={AboutComponent}/>
    <Redirect from='*' to='/' />
  </Route>
);