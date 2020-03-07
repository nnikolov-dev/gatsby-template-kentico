import React from 'react'
import PropTypes from 'prop-types'
import styles from './jumbotron.module.scss'

const Jumbotron = ({title, image}) => (
	<div className={styles.Jumbotron} style={{backgroundImage: `url(${image})`}}>
		<div className={styles.Title}>{title}</div>
	</div>
)

Jumbotron.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
}

Jumbotron.defaultProps = {
	title: '',
	image: 'https://images.unsplash.com/photo-1583560306723-4e50a15636c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
}

export default Jumbotron
