import React from 'react';
import PropTypes from 'prop-types';

const DownoadLink = ({ className, children, href }) => (
	<a className={className} href={href} target="_blank" download>
		{children}
	</a>
);

DownoadLink.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string
};

export default DownoadLink;
