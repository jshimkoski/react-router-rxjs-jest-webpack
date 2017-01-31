import React, {Component} from 'react';

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