import React from 'react';
import Root from './root.component';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

describe('Root', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <MemoryRouter>
        <Root/>
      </MemoryRouter>
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});