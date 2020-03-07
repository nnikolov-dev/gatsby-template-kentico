import React from 'react'
import PropTypes from 'prop-types'
import styles from './title.module.scss'

const Title = ({children}) => (
	<div className={styles.Title}>{children}</div>
)

Title.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Title.defaultProps = {
	children: '',
}

export default Title
