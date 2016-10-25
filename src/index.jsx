import React from 'react';
import {render} from 'react-dom';
import { Router, hashHistory } from 'react-router'

import routes from 'routes/routes';

const root = document.createElement('div');
document.body.appendChild(root);

render((
  <Router routes={routes} history={hashHistory}/>
), root);