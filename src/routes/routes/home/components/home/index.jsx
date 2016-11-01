import React, {Component} from 'react';

import Helmet from "react-helmet";
import Nav from 'components/nav';

import CounterIntent from 'states/counter/intent';

const Home = props => {

  const handleIncrementCounter = () => { CounterIntent.incrementCounter(); };
  const handleDecreaseCounter = () => { CounterIntent.decreaseCounter(); };

  const counter = props.CounterState ? props.CounterState.counter : null;

  return (
    <section className="home">
      <Helmet title="Home" />
      <h2>Home</h2>
      <button onClick={handleIncrementCounter}>Increase</button>
      <button onClick={handleDecreaseCounter}>Decrease</button>
      {counter}
    </section>
  );

};

export default Home;