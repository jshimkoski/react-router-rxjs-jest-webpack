import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

import RootRoute from 'routes/root/root.route';

const root = document.createElement('div');
document.body.appendChild(root);

render((
  <Router routes={RootRoute} history={browserHistory}/>
), root);