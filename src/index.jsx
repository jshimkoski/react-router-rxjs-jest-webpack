import React from 'react';
import {render} from 'react-dom';
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

import Routes from 'routes';

const root = document.createElement('div');
document.body.appendChild(root);

render((
  <Router routes={Routes} history={browserHistory}/>
), root);