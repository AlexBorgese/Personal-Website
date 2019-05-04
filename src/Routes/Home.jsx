import React from 'react';

import ExternalLink from '../components/ExternalLink';
import linkedin from '../images/linkedin.png';
import gitHub from '../images/gitHub.png';

import cv from '../files/AlexBorgeseCV.pdf';
import DownloadLink from '../components/DownloadLink';

const Home = () => (
	<div className="main">
		<h1 className="home-header"> Click the images to find out more:</h1>
		<div className="external-logos">
			<ExternalLink
				className="linkedin"
				href="https://www.linkedin.com/in/alex-borgese-90b172120/"
			>
				<img src={linkedin} alt="linkedIn" />
			</ExternalLink>
			<ExternalLink
				className="github"
				href="https://github.com/AlexBorgese"
			>
				<img src={gitHub} alt="gitHub" />
			</ExternalLink>
			<DownloadLink className="download" href={cv}>
				CV
			</DownloadLink>
		</div>
	</div>
);

export default Home;
