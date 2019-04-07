import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
	<header className="App-header">
		<h1 className="header">Alex Borgese</h1>
		<h2 className="sub-header">Front End Developer</h2>
		{children}
	</header>
);

Header.propTypes = {
	children: PropTypes.node
};

export default Header;
