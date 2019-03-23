import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from './App';
import Header from './components/Header';
import SideBar from './components/SideBar/Sidebar';
import { Home, Info } from './Routes';

describe('Given the App Component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<App />);
	});

	it('should render a Header component', () => {
		expect(component.find(Header).length).toEqual(1);
	});

	it('should render a SideBar component', () => {
		expect(component.find(SideBar).length).toEqual(1);
	});

	it('should pass the correct links to the sidebar', () => {
		expect(component.find(SideBar).childAt(0).childAt(0).prop('to')).toEqual('/');
		expect(component.find(SideBar).childAt(1).childAt(0).prop('to')).toEqual('/about');
	});

	it('should render the correct routes', () => {
		expect(component.find(Route).length).toEqual(2);
		expect(component.find(Route).at(0).props().path).toEqual('/');
		expect(component.find(Route).at(0).props().component).toEqual(Home);
		expect(component.find(Route).at(1).props().path).toEqual('/about');
		expect(component.find(Route).at(1).props().component).toEqual(Info);
	});
});

