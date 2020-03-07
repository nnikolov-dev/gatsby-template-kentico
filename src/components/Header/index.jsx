import React from 'react'
import PropTypes from 'prop-types'
import styles from './header.module.scss'

const Header = ({children}) => (
	<div className={styles.Header}>
		{children}
	</div>
)

Header.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Header.defaultProps = {
	children: '',
}

export default Header
