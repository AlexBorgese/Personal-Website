import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './Sidebar';

const Child = () => <div />;

describe('Given a Sidebar component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<SideBar><Child /></SideBar>);
	});

	it('should contain a div element with the correct className', () => {
		expect(component.find('div').props().className).toEqual('sidebar');
	});

	it('should render any children pass in', () => {
		expect(component.find(Child).length).toEqual(1);
	});
});
