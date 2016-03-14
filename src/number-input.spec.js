// require('react-native-mock/mock');

import React from 'react-native';
import NumberInput from './number-input';
import { shallow } from 'enzyme';
import test from 'tape';
import expect from 'expect';

test('renders correct width', (t) => {
	const output = shallow(<NumberInput width={10} />);
	expect(output.style.width).toBe(10);
	t.pass('component is a cross icon');
	t.end();
});
