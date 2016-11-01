import React, {Component} from 'react';

import Helmet from "react-helmet";
import Nav from 'components/nav';
import JsonResult from 'components/jsonResult'

import JsonPlaceholderIntent from 'states/jsonPlaceholder/intent';

const About = props => {

  const handleGetJSON = () => { JsonPlaceholderIntent.getJSON(); };

  return (
    <section className="about">
      <Helmet title="About" />
      <h2>About</h2>
      <button onClick={handleGetJSON}>Get JSON</button>
      <JsonResult {...props.JsonPlaceholderState} />
    </section>
  );

};

export default About;