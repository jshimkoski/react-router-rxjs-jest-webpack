import React from 'react';
import Header from './header.component';
import renderer from 'react-test-renderer';

test('Header renders correctly', () => {
  const tree = renderer.create(
    <Header/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});