import React from 'react'
import Bar from '../components/Bar'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Container from '../components/Container'
import '../assets/styles/style.scss'
import Jumbotron from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import Card from '../components/Card'
import Helmet from 'react-helmet'

import logoImage from '../assets/images/logo.svg'

const navItems = [
	{
		title: 'Home',
		address: '/',
		active: true,
	},
	{
		title: 'About',
		address: '/about',
		active: false,
	},
	{
		title: 'The Team',
		address: '/person',
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
	<>
		<Helmet>
			<title>Home :: Agency</title>
		</Helmet>
		<Container>
			<main className="container">
				<Bar left="info@testemail.com" right="call us now 020 341 123123" />
				<Nav items={navItems} dark />
				<section className="home">
					<Layout>
						<Jumbotron
							image="https://images.unsplash.com/photo-1578923815449-3d930f68c13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
							dark
						>
							<Layout>
								<div className="jumbotron">
									<div className="jumbotron-image">
										<img src={logoImage} alt="Logo" />
									</div>
									<p className="jumbotron-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat blanditiis maxime dolores recusandae in distinctio aperiam a?</p>
									<div className="jumbotron-buttons">
										<Button active>Call us now</Button>
										<Button>Learn More</Button>
									</div>
								</div>
							</Layout>
						</Jumbotron>
					</Layout>
					<div className="content">
						<Layout padded>
							<div className="flex">
								<div className="left">
									<div>
										<h1>Welcome</h1>
										<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cupiditate optio porro illum quibusdam error modi fuga reprehenderit debitis voluptatum libero officia molestias, quasi unde ullam sit corporis! Repellat, labore. <a href="/about">Read more about us</a></p>
									</div>
								</div>
								<div className="right">
									<ul>
										<li>Criminal Law</li>
										<li>Matriomonial and Family Law</li>
										<li>Motoring Offences</li>
										<li>Some area of law</li>
									</ul>
								</div>
							</div>
							<div className="lr-section">
								<div className="lr">
									<h1>Our Expertise</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								</div>
								<div className="lr">
									<h1>Our Team</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								</div>
								<div className="lr">
									<h1>Our Company</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem. <a href="/about">Find more about our services</a></p>
								</div>
							</div>
							<div className="quotes-section">
								<div className="quotes">
									<div className="quote">
										<Card
											image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
											title="Amy Shmertz"
										>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi aliquam modi dolores error perferendis dolorem impedit temporibus. Illum, quam quas quisquam a fugit sint nobis quibusdam id tempora!
										</Card>
									</div>
									<div className="quote">
										<Card
											image="https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
											title="Helena Shuler"
										>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi aliquam modi dolores error perferendis dolorem impedit temporibus. Illum, quam quas quisquam a fugit sint nobis quibusdam id tempora!
										</Card>
									</div>
									<div className="quote">
										<Card
											image="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
											title="Michael Vivas"
										>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi aliquam modi dolores error perferendis dolorem impedit temporibus. Illum, quam quas quisquam a fugit sint nobis quibusdam id tempora!
										</Card>
									</div>
									<div className="quote">
										<Card
											image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
											title="Emily Slark"
										>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolor commodi aliquam modi dolores error perferendis dolorem impedit temporibus. Illum, quam quas quisquam a fugit sint nobis quibusdam id tempora!
										</Card>
									</div>
								</div>
							</div>
						</Layout>
					</div>
				</section>
			</main>
			<Footer>
				<span>Comapny Name<br />Company Address</span>
				<div style={{width: '300px', height: '100px', background: 'white'}} />
			</Footer>
		</Container>
	</>
)


export default Index
