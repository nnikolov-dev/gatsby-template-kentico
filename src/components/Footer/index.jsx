import React from 'react'
import PropTypes from 'prop-types'
import styles from './footer.module.scss'

const Footer = ({children}) => (
	<div className={styles.Footer}>
		{children}
	</div>
)

Footer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Footer.defaultProps = {
	children: '',
}

export default Footer
