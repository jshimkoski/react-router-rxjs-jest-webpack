import React, {Component} from 'react';
import Nav from 'components/nav/nav.component';
import JsonResult from 'components/jsonResult/jsonResult.component'

import JsonPlaceholderIntent from 'states/jsonPlaceholder/jsonPlaceholder.intent';

const About = props => {

  const handleGetJSON = () => { JsonPlaceholderIntent.getJSON(); };

  return (
    <section className="about">
      <h2>About</h2>
      <button onClick={handleGetJSON}>Get JSON</button>
      <JsonResult {...props.JsonPlaceholderState} />
    </section>
  );

};

export default About;