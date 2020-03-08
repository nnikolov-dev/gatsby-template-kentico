import React from 'react'
import Bar from '../components/Bar'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import '../assets/styles/style.scss'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import Title from '../components/Title'

const navItems = [
	{
		title: 'Home',
		address: '/',
		active: false,
	},
	{
		title: 'About',
		address: '/about',
		active: true,
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

const About = () => (
	<Layout>
		<div className="container">
			<Bar left="info@testemail.com" right="call us now 020 341 123123" />
			<Header>
				<img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="200px" alt="Logo" />
			</Header>
			<Nav items={navItems} />
			<Jumbotron justifyContent="flex-start" alignItems="flex-end">
				<div className="about-jumbotron">
					<Title>About us</Title>
				</div>
			</Jumbotron>
			<div className="about">
				<div className="flex">
					<p className="about-text">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quam quaerat dolore consectetur doloribus eaque saepe nesciunt. Doloremque dicta nostrum laudantium nulla at deserunt nesciunt repellendus, non voluptate similique, earum perferendis culpa excepturi repudiandae harum. Repellat eligendi quod ex deserunt eaque doloribus asperiores! Accusamus quasi necessitatibus, laudantium debitis quis, aut labore illum hic animi aliquam omnis qui commodi saepe facilis placeat soluta eos. Ad, odio quo. Porro placeat quia tempore odit, quibusdam a magni sunt ipsum ipsa itaque adipisci cumque aperiam quod voluptatibus optio nostrum alias reiciendis fugiat aspernatur qui laborum officia nulla ea. Suscipit, dicta error sint laudantium iusto, consectetur quae architecto accusantium quas quod excepturi et quia delectus expedita inventore corrupti quasi debitis aut. Reiciendis, suscipit? Voluptatibus commodi quae accusamus expedita, deleniti quia. A quos dolor doloremque error accusamus, magni autem quia quam? Debitis qui corrupti rem cupiditate. Earum libero, enim omnis perspiciatis exercitationem accusantium soluta iste cumque numquam optio sit assumenda aspernatur odio nulla autem veritatis dignissimos quibusdam a! Itaque consequuntur velit impedit distinctio eveniet consequatur similique quibusdam nobis maiores veritatis. Commodi tempora impedit odio minus ea modi nemo, quidem rerum esse unde harum quasi dolorem sit libero eaque. Ducimus rem quae tempora porro sapiente architecto aperiam.
					</p>
					<div className="about-image">
						<img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80" alt="business" />
					</div>
				</div>
			</div>
		</div>
		<Footer>
			<span>Comapny Name<br />Company Address</span>
			<div style={{width: '300px', height: '100px', background: 'white'}} />
		</Footer>
	</Layout>
)


export default About
