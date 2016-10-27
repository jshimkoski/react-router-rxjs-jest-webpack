import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router'

import routes from 'routes/routes';

const root = document.createElement('div');
document.body.appendChild(root);

render((
  <Router routes={routes} history={browserHistory}/>
), root);