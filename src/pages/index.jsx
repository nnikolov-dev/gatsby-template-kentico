import React from 'react'
import Bar from '../components/Bar'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import '../assets/styles/style.scss'
import Jumbotron from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Card from '../components/Card'

const navItems = [
	{
		title: 'Home',
		address: '#',
		active: true,
	},
	{
		title: 'About',
		address: '/about',
		active: false,
	},
	{
		title: 'The Team',
		address: '#',
		active: false,
	},
	{
		title: 'Services',
		address: '#',
		active: false,
	},
	{
		title: 'Contact',
		address: '#',
		active: false,
	},
]

const Index = () => (
	<Layout>
		<main className="container">
			<Bar left="info@testemail.com" right="call us now 020 341 123123" />
			<Nav items={navItems} dark />
			<Jumbotron
				image="https://images.unsplash.com/photo-1578923815449-3d930f68c13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
				dark
			>
				<div className="home-jumbotron">
					<div className="jumbotron-image">
						<img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="200px" alt="Logo" />
					</div>
					<span className="jumbotron-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat blanditiis maxime dolores recusandae in distinctio aperiam a?</span>
					<div className="jumbotron-buttons">
						<Button active>Call us now</Button>
						<Button>Learn More</Button>
					</div>
				</div>
			</Jumbotron>
			<div className="home">
				<h1>Welcome</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate optio porro illum quibusdam error modi fuga reprehenderit debitis voluptatum libero officia molestias, quasi unde ullam sit corporis! Repellat, labore.</p>
				<h1>Our Expertise</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem.</p>
				<div className="profiles">
					<Profile image="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" title="Criminal Law" />
					<Profile image="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" title="Matriomonial and Family Law" />
					<Profile image="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" title="Motoring Offences" />
					<Profile image="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" title="Some area of law" />
				</div>
				<h1>What do our clients think</h1>
				<div className="quotes">
					<div className="quote">
						<Card>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi aliquam modi dolores error perferendis dolorem impedit temporibus. Illum, quam quas quisquam a fugit sint nobis quibusdam id tempora!
						</Card>
					</div>
					<div className="quote">
						<Card>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi aliquam modi dolores error perferendis dolorem impedit temporibus. Illum, quam quas quisquam a fugit sint nobis quibusdam id tempora!
						</Card>
					</div>
					<div className="quote">
						<Card>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi aliquam modi dolores error perferendis dolorem impedit temporibus. Illum, quam quas quisquam a fugit sint nobis quibusdam id tempora!
						</Card>
					</div>
				</div>
			</div>
		</main>
		<Footer>
			<span>Comapny Name<br />Company Address</span>
			<div style={{width: '300px', height: '100px', background: 'white'}} />
		</Footer>
	</Layout>
)


export default Index
