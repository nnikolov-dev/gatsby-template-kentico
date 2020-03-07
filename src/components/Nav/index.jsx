import React from 'react'
import PropTypes from 'prop-types'
import styles from './nav.module.scss'

const Nav = ({items, dark}) => (
	<div className={dark ? styles.Dark : styles.Nav}>
		{items.map(({title, address, active}) => <div className={styles.Item} key={title}>{title}</div>)}
	</div>
)

Nav.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		address: PropTypes.address,
		active: PropTypes.bool,
	})),
	dark: PropTypes.bool,
}

Nav.defaultProps = {
	items: [],
	dark: false,
}

export default Nav
