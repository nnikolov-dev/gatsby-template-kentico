import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout'
import styles from './bar.module.scss'

const Bar = ({left, right}) => (
	<div className={styles.Bar}>
		<Layout>
			<div className={styles.Content}>
				<div>{left}</div>
				<div>{right}</div>
			</div>
		</Layout>
	</div>
)

Bar.propTypes = {
	left: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
	right: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Bar.defaultProps = {
	left: '',
	right: '',
}

export default Bar
