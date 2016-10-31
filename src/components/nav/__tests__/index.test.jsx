import React from 'react';
import Nav from '../index';
import renderer from 'react-test-renderer';

describe('Nav', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Nav/>
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});