import React from 'react';
import { shallow } from 'enzyme';
import DownloadLink from './DownloadLink.jsx';

const Child = () => <div />;
const HREF = '/somewhere/else/please';
const CLASSNAME = 'classy';

const props = {
	className: CLASSNAME,
	href: HREF
};

describe('Given a DownloadLink component', () => {
	let component;

	beforeEach(() => {
		component = shallow(
			<DownloadLink {...props}>
				<Child />
			</DownloadLink>
		);
	});

	it('should contain a anchor element with the correct props', () => {
		expect(component.find('a').props().className).toEqual(CLASSNAME);
		expect(component.find('a').props().href).toEqual(HREF);
		expect(component.find('a').props().target).toEqual('_blank');
		expect(component.find('a').props().download).toEqual(true);
	});

	it('should render any children pass in', () => {
		expect(component.find(Child).length).toEqual(1);
	});
});
