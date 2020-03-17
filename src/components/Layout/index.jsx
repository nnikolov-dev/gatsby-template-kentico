import React from 'react'
import PropTypes from 'prop-types'
import styles from './layout.module.scss'

const Layout = ({children, padded}) => (
	<div className={padded ? styles.Padded : styles.Layout}>
		{children}
	</div>
)

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	padded: PropTypes.bool,
}

Layout.defaultProps = {
	children: '',
	padded: false,
}

export default Layout
