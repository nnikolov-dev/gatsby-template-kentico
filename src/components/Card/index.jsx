import React from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.scss'

const Card = ({children}) => (
	<div className={styles.Card}>
		{children}
	</div>
)
Card.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Card.defaultProps = {
	children: '',
}

export default Card
