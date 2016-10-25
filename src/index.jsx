import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from 'components/test/test.component'

let test = new TestComponent();
test.setName("test name");

let test2 = new TestComponent();
test2.getName();

test2.setName("test 2 name");
test.getName();

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  root
);