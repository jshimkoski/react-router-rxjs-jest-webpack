import React from 'react';
import Root from '../Root.component';
import renderer from 'react-test-renderer';

describe('Root', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <Root>
        <div class="test-child-stub"/>
      </Root>
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});