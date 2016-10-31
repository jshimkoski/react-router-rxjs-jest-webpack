import React from 'react';
import JsonResult from '../index';
import renderer from 'react-test-renderer';

describe('JsonResult', () => {
  let component;
  beforeEach(() => {
    component = renderer.create(
      <JsonResult results={[{id: 1, title: 'testTitle', body: 'testBody'}]} />
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});