import React from 'react';
import About from '../index';
import renderer from 'react-test-renderer';

describe('About', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <About JsonPlaceholderState={[{id: 1, title: 'testTitle', body: 'testBody'}]} />
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});