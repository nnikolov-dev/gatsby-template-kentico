import React, {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {window} from 'browser-monads'
import Layout from '../Layout'
import styles from './nav.module.scss'

const Menu = ({items, dark, fixed, navRef}) => {
	const [visible, setVisible] = useState(false)
	const toggleNav = () => setVisible(!visible)
	return (
		<div className={`${dark ? styles.Dark : styles.Nav} ${fixed && styles.Fixed}`} ref={navRef}>
			<Layout>
				<div className={styles.Items}>
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
			</Layout>
		</div>
	)
}

const Nav = ({items, dark}) => {
	const navRef = useRef()
	const navRefFixed = useRef()

	const handleResize = () => {
		if (navRef.current && navRefFixed.current) {
			navRefFixed.current.style.width = `${navRef.current.getBoundingClientRect().width}px`
		}
	}

	const handleScroll = () => {
		if (navRef.current && navRefFixed.current) {
			if (navRef.current.offsetTop <= window.scrollY) {
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
			<Menu navRef={navRef} items={items} dark={dark} />
			<Menu navRef={navRefFixed} items={items} dark={dark} fixed />
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
