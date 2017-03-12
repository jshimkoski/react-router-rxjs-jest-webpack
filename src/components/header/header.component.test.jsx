import React from 'react';
import Header from './header.component';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <MemoryRouter>
        <Header/>
      </MemoryRouter>
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});