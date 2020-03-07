import React from 'react'
import PropTypes from 'prop-types'
import styles from './layout.module.scss'

const Layout = ({children}) => (
	<div className={styles.Layout}>
		{children}
	</div>
)

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Layout.defaultProps = {
	children: '',
}

export default Layout
