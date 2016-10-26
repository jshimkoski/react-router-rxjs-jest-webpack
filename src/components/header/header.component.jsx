import React, {Component} from 'react';
import {IndexLink} from 'react-router';

import Nav from 'components/nav/nav.component';

const Header = props => {
  return (
    <header>
      <h1>Header</h1>
      <Nav></Nav>
    </header>
  );
};

export default Header;