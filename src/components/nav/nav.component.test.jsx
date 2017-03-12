import React from 'react';
import Nav from './nav.component';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

describe('Nav', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <MemoryRouter>
        <Nav/>
      </MemoryRouter>
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});