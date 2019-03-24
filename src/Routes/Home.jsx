import React from 'react';

import ExternalLink from '../components/ExternalLink';
import linkedin from '../images/linkedin.png';

const Home = () => (
	<div>
		<ExternalLink className="linkedin" href="https://www.linkedin.com/in/alex-borgese-90b172120/">
			<img src={ linkedin } alt="linkedIn" />
		</ExternalLink>
	</div>
);

export default Home;
