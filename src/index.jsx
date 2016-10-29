import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router'

import RootRoute from 'routes/root/root.route';

const root = document.createElement('div');
document.body.appendChild(root);

render((
  <Router routes={RootRoute} history={browserHistory}/>
), root);