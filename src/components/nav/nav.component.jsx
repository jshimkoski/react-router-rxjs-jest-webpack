import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import Homer from './homer.jpeg';
import styles from './nav.scss';

const Nav = props => {
  return (
    <nav className={styles.nav}>
      <img src={Homer}/>
      <ul>
        <li><NavLink exact to="/" activeClassName={styles.active}>Home</NavLink></li>
        <li><NavLink to="/about" activeClassName={styles.active}>About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;