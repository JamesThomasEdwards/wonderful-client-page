// React;
import React from 'react';
// Files;
import BottomLeftShapeContainer from '../../containers/BottomLeftShapeContainer.jsx';
// Testing
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = 0;
const wrapper = shallow(<BottomLeftShapeContainer {...props} />)

test('should render App component correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<BottomLeftShapeContainer />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('initial state should be false', () => {
    expect(wrapper.state()).toEqual({ animate: false });
});