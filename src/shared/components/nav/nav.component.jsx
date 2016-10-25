import React from 'react';
import {IndexLink} from 'react-router';

require('./nav.scss');

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><IndexLink to="/about" activeClassName="active">About</IndexLink></li>
        </ul>
      </nav>
    )
  }
}