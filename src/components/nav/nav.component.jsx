import React, {Component} from 'react';
import IndexLink from 'react-router/lib/IndexLink';

import Homer from './homer.jpeg';
import './nav.scss';

const Nav = props => {
  return (
    <nav className="nav">
      <img src={Homer}/>
      <ul>
        <li><IndexLink to="home" activeClassName="active">Home</IndexLink></li>
        <li><IndexLink to="about" activeClassName="active">About</IndexLink></li>
      </ul>
    </nav>
  );
};

export default Nav;