import React from 'react';
import {IndexLink} from 'react-router';

import Nav from 'components/nav/nav.component';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Header</h1>
        <Nav></Nav>
      </header>
    )
  }
}