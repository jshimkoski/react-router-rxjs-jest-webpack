import React, {Component} from 'react';
import Nav from 'components/nav/nav.component';
import JsonResult from 'components/jsonResult/jsonResult.component'

import Example from 'states/example/example.state';

export default class About extends Component {

  handleGetJSON() {
    return Example.getJSON();
  }

  render() {
    return (
      <section className="about">
        <h2>About</h2>
        <button onClick={this.handleGetJSON}>Test</button>
        <h3>Results: </h3>
        <JsonResult {...this.props} />
      </section>
    )
  }
}