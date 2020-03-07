import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {window} from 'browser-monads'
import styles from './nav.module.scss'

const Nav = ({items, dark}) => {
	const navRef = useRef()
	const navRefFixed = useRef()
	const [visible, setVisible] = useState(false)
	const toggleNav = () => setVisible(!visible)

	const handleResize = () => {
		if (navRef.current && navRefFixed.current) {
			navRefFixed.current.style.width = `${navRef.current.getBoundingClientRect().width}px`
		}
	}

	const handleScroll = () => {
		if (navRef.current && navRefFixed.current) {
			if (navRef.current.offsetTop + navRef.current.getBoundingClientRect().height <= window.scrollY) {
				navRef.current.style.visibility = 'hidden'
				navRefFixed.current.style.visibility = 'visible'
				navRef.current.style.opacity = 0
				navRefFixed.current.style.opacity = 1
			} else {
				navRef.current.style.opacity = 1
				navRefFixed.current.style.opacity = 0
				navRef.current.style.visibility = 'visible'
				navRefFixed.current.style.visibility = 'hidden'
			}
			handleResize()
		}
	}

	useEffect(() => {
		handleScroll()
		handleResize()

		window.addEventListener('scroll', handleScroll)
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('scroll', handleScroll)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			<div className={dark ? styles.Dark : styles.Nav} ref={navRef}>
				{items.map(({title, address, active}) => (
					<div
						className={`${styles.Item} ${visible && styles.Visible} ${active && styles.Active}`}
						key={title}
					>
						<Link to={address}>{title}</Link>
					</div>
				))}
				<div className={styles.Toggle} onClick={toggleNav}>
					<div />
					<div />
					<div />
				</div>
			</div>
			<div className={`${dark ? styles.Dark : styles.Nav} ${styles.Fixed}`} ref={navRefFixed}>
				{items.map(({title, address, active}) => (
					<div
						className={`${styles.Item} ${visible && styles.Visible} ${active && styles.Active}`}
						key={title}
					>
						<Link to={address}>{title}</Link>
					</div>
				))}
				<div className={styles.Toggle} onClick={toggleNav}>
					<div />
					<div />
					<div />
				</div>
			</div>
		</>
	)
}

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
