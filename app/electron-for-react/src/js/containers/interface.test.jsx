import React from 'react';
import renderer from 'react-test-renderer';

import Root from './Root';

test('interface Snapshot', () => {
  const component = renderer.create(<Root />).toJSON();
  expect(component).toMatchSnapshot();
});
