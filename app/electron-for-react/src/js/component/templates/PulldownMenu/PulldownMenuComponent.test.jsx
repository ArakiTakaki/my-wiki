import React from 'react';
import PulldownMenu from './PulldownMenuComponent';
import renderer from 'react-test-renderer';
// react16.8で使用できないので一旦保留
// import { shallow } from 'enzyme';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

// snapshot test
test('PulldownMenu SnapShot', () => {
  let component = null;
  component = renderer.create(<PulldownMenu value="test" />).toJSON();
  expect(component).toMatchSnapshot();
});

/*
test('PulldownMenu enzyme', () => {
  const wrapper = shallow(<PulldownMenu />);
  // TODO コンポーネントのテストを記載する
  // expect(wrapper.text()).toBe('InputType:test');
});
*/
