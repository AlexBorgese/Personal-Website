import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ children }) => <ul className="sidebar">{children}</ul>;

SideBar.propTypes = {
	children: PropTypes.node
};

export default SideBar;
