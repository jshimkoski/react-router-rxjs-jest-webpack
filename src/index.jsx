import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import createBrowserHistory from 'history/createBrowserHistory';

import Root from 'routes/root/root.component';

import 'index.scss';

const root = document.createElement('div');
document.body.appendChild(root);

render((
  <BrowserRouter history={createBrowserHistory}>
    <Root/>
  </BrowserRouter>
), root);