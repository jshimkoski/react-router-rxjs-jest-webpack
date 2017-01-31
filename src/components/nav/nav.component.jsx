import React, {Component} from 'react';
import IndexLink from 'react-router/lib/IndexLink';

import Homer from './homer.jpeg';
import styles from './nav.scss';

const Nav = props => {
  return (
    <nav className={styles.nav}>
      <img src={Homer}/>
      <ul>
        <li><IndexLink to="home" activeClassName={styles.active}>Home</IndexLink></li>
        <li><IndexLink to="about" activeClassName={styles.active}>About</IndexLink></li>
      </ul>
    </nav>
  );
};

export default Nav;