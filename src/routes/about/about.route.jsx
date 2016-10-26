import React, {Component} from 'react';
import Nav from 'components/nav/nav.component';
import JsonResult from 'components/jsonResult/jsonResult.component'

import JsonPlaceholderState from 'states/jsonPlaceholder/jsonPlaceholder.state';

const About = props => {

  const handleGetJSON = () => { JsonPlaceholderState.getJSON(); };

  return (
    <section className="about">
      <h2>About</h2>
      <button onClick={handleGetJSON}>Get JSON</button>
      <JsonResult {...props} />
    </section>
  );

};

export default About;