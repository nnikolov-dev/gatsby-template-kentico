import React from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.scss'

const Card = ({children, image, title}) => (
	<div className={styles.Card}>
		{image && (
			<div className={styles.Image}>
				<img src={image} width="100" alt="Card" />
				{title && <div className={styles.Title}>{title}</div>}
			</div>
		)}
		<div className={styles.Content}>
			{children}
		</div>
	</div>
)
Card.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Card.defaultProps = {
	children: '',
}

export default Card
