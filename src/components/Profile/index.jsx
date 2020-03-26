import React from 'react'
import PropTypes from 'prop-types'
import styles from './profile.module.scss'

const Profile = ({image, title, children}) => (
	<div className={styles.Profile}>
		<img src={image} alt={title} className={styles.Image} />
		<div className={styles.Title}>{title}</div>
		<div className={styles.Overlay}>
			<div className={styles.Content}>{children}</div>
		</div>
	</div>
)

Profile.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Profile.defaultProps = {
	image: '',
	title: '',
	children: '',
}


export default Profile
