import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {Animated} from 'react-animated-css'
import 'animate.css'
import styles from './carousel.module.scss'

const Carousel = ({children}) => {
	const [active, setActive] = useState(0)
	const handleClick = (arg) => () => {
		setActive(arg >= 0 && arg < children.length ? arg : active)
	}
	return (
		<div className={styles.Carousel}>
			<div className={styles.Left} onClick={handleClick(active - 1)} style={{visibility: active === 0 ? 'hidden' : 'visible'}} />
			<div className={styles.Items}>
				{children.map((child, i) => (
					<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={i === active}>
						<div style={{display: i === active ? 'block' : 'none'}}>
							{child}
						</div>
					</Animated>
				))}
			</div>
			<div className={styles.Right} onClick={handleClick(active + 1)} style={{visibility: active === children.length - 1 ? 'hidden' : 'visible'}} />
		</div>
	)
}

Carousel.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
}

Carousel.defaultProps = {
	children: '',
}

export default Carousel
