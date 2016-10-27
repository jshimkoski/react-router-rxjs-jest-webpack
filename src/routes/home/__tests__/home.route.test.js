import React from 'react';
import Home from '../home.route';
import renderer from 'react-test-renderer';

describe('Home', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Home CounterState={{counter: 1}} />
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});