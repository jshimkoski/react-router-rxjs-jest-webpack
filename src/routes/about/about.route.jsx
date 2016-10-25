import React from 'react';
import Nav from 'components/nav/nav.component';

import Example from 'states/example/example.state';

Example.getJSON()

export default class About extends React.Component {
  render() {
    return (
      <section className="about">
        <h2>About</h2>
      </section>
    )
  }
}