import React from 'react';
import Header from '../header.component';
import renderer from 'react-test-renderer';

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Header/>
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});