import React, {Component} from 'react';
import Nav from 'components/nav/nav.component';

import CounterIntent from 'states/counter/counter.intent';

const Home = props => {

  const handleIncrementCounter = () => { CounterIntent.incrementCounter(); };
  const handleDecreaseCounter = () => { CounterIntent.decreaseCounter(); };

  const counter = props.CounterState ? props.CounterState.counter : null;

  return (
    <section className="home">
      <h2>Home</h2>
      <button onClick={handleIncrementCounter}>Increase</button>
      <button onClick={handleDecreaseCounter}>Decrease</button>
      {counter}
    </section>
  );

};

export default Home;