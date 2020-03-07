import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.scss'

const Button = ({active, children}) => (
	<div className={`${styles.Button} ${active && styles.Active}`}>
		{children}
	</div>
)

Button.propTypes = {
	active: PropTypes.bool,
	children: PropTypes.string,
}

Button.defaultProps = {
	active: false,
	children: '',
}

export default Button
