import React from 'react'
import PropTypes from 'prop-types'
import styles from './profile.module.scss'

const Profile = ({image, title}) => (
	<div className={styles.Profile}>
		<img src={image} alt={title} className={styles.Image} />
		<span className={styles.Title}>{title}</span>
	</div>
)

Profile.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
}

Profile.defaultProps = {
	image: '',
	title: '',
}


export default Profile
