import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const Child = () => <div />;

describe('Given a Header component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Header><Child /></Header>);
	});

	it('should contain a header element with the correct className', () => {
		expect(component.find('header').props().className).toEqual('App-header');
	});

	it('it should contain a h1 element with the correct className', () => {
		expect(component.find('h1').props().className).toEqual('header');
	});

	it('should have the correct text', () => {
		expect(component.find('h1').text()).toEqual('Alex Borgese');
	});

	it('should render any children pass in', () => {
		expect(component.find(Child).length).toEqual(1);
	});
});
