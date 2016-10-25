import React from 'react';
import Nav from 'components/nav/nav.component';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Nav></Nav>
        <Nav></Nav>
      </div>
    )
  }
}