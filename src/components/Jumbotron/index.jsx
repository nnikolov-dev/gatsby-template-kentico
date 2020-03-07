import React from 'react'
import PropTypes from 'prop-types'
import styles from './jumbotron.module.scss'

const Jumbotron = ({image, children, justifyContent, alignItems, dark}) => (
	<div className={styles.Jumbotron} style={{backgroundImage: `url(${image})`, justifyContent, alignItems}}>
		{dark && (<div className={styles.Dark} />)}
		{children}
	</div>
)

Jumbotron.propTypes = {
	image: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	justifyContent: PropTypes.string,
	alignItems: PropTypes.string,
	dark: PropTypes.bool,
}

Jumbotron.defaultProps = {
	image: 'https://images.unsplash.com/photo-1583560306723-4e50a15636c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
	children: '',
	justifyContent: 'center',
	alignItems: 'center',
	dark: false,
}

export default Jumbotron
