import React from 'react';
import { shallow } from 'enzyme';

import ExternalLink from '../components/ExternalLink';
import Home from './Home.jsx';
import linkedin from '../images/linkedin.png';
import github from '../images/gitHub.png';
import DownloadLink from '../components/DownloadLink';
import cv from '../files/AlexBorgeseCV.pdf';

describe('Given the Home component', () => {
	let component;

	beforeEach(() => {
		component = shallow(<Home />);
	});

	it('should render the linkedin logo', () => {
		const linkedinLogo = component
			.find(ExternalLink)
			.at(0)
			.childAt(0);

		expect(linkedinLogo.props().src).toEqual(linkedin);
	});

	it('should render the github logo', () => {
		const githubLogo = component
			.find(ExternalLink)
			.at(1)
			.childAt(0);

		expect(githubLogo.props().src).toEqual(github);
	});

	it('should render a downloadlink with the correct props', () => {
		expect(component.find(DownloadLink).props().href).toEqual(cv);
	});
});
