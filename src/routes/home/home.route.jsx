import React, {Component} from 'react';
import Nav from 'components/nav/nav.component';

import CounterState from 'states/counter/counter.state';

const Home = props => {

  const handleIncrementCounter = () => { CounterState.incrementCounter(); };
  const handleDecreaseCounter = () => { CounterState.decreaseCounter(); };

  return (
    <section className="home">
      <h2>Home</h2>
      <button onClick={handleIncrementCounter}>Increase</button>
      <button onClick={handleDecreaseCounter}>Decrease</button>
      {props.counter}
    </section>
  );

};

export default Home;