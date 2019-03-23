import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ children }) => (
	<div className="sidebar">
		{ children }
	</div>
);

SideBar.propTypes = {
	children: PropTypes.node
};

export default SideBar;
