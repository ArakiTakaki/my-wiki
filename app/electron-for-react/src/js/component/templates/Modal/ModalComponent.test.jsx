import React from 'react';
import Modal from './ModalComponent';
import renderer from 'react-test-renderer';
// react16.8で使用できないので一旦保留
// import { shallow } from 'enzyme';
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// configure({ adapter: new Adapter() });

// snapshot test
test('Modal SnapShot', () => {
  let component = null;
  component = renderer.create(<Modal />).toJSON();
  expect(component).toMatchSnapshot();
});

/*
test('Modal enzyme', () => {
  const wrapper = shallow(<Modal />);
  // TODO コンポーネントのテストを記載する
  // expect(wrapper.text()).toBe('InputType:test');
});
*/
