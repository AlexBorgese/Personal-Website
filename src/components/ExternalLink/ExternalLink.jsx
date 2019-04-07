import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ className, children, href }) => (
	<a className={className} href={href} target="_blank">
		{children}
	</a>
);

ExternalLink.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	href: PropTypes.string
};

export default ExternalLink;
