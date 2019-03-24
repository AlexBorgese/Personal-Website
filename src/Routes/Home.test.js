import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home.jsx';
import linkedin from '../images/linkedin.png';

describe('Given the Home component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Home />);
	});

	it('should render the linkedin logo', () => {
		expect(component.find('img').props().src).toEqual(linkedin);
	});
});
