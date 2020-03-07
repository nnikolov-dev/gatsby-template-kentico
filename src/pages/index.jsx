import React from 'react'
import Bar from '../components/Bar'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import '../assets/styles/style.scss'
import Jumbotron from '../components/Jumbotron'
import Button from '../components/Button'
import Footer from '../components/Footer'
import Profile from '../components/Profile'

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
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, illo cupiditate iste eos voluptas laudantium neque ex placeat enim nam quas cumque esse quod sit iusto dolorem aspernatur pariatur dolorum, a adipisci. Itaque accusantium praesentium molestias non maxime alias sit. Ducimus odit placeat ad esse facere voluptate, doloribus, aut atque ut dolorem soluta quos id aspernatur nihil debitis assumenda repudiandae fugit, sequi doloremque temporibus qui non? Voluptatum accusantium ullam sit deserunt quidem eveniet molestiae, error blanditiis explicabo quaerat saepe porro adipisci possimus fugit excepturi, eaque illum. Voluptatibus dolorum nostrum distinctio delectus consectetur voluptates, impedit quidem laborum quo earum id? Eius quisquam, reprehenderit aliquid natus fugit quod repellendus laboriosam, impedit iste repellat ab harum a. Quam mollitia ab deleniti tenetur molestiae. Debitis repellat odio cupiditate, officia perferendis inventore quaerat? Odio, laborum deleniti saepe ullam vero tempora. Odio, esse sequi illum ullam voluptate dolorum nostrum pariatur tempore, nobis sunt beatae saepe aut eius non facere soluta similique in commodi aliquid magni? Quos neque, ipsum quisquam libero nihil corporis maxime obcaecati facere voluptatem illo itaque tempora voluptate molestias, ducimus quasi velit! Quo provident dolorum reiciendis perspiciatis atque doloribus a rerum, minima sequi eos labore deleniti aspernatur, dolor cupiditate culpa libero autem placeat? Earum placeat animi molestias libero commodi adipisci quam facere obcaecati nam nihil similique beatae dignissimos, quaerat perspiciatis. Quidem est aliquid adipisci illo voluptas! Consequatur officia iste nobis! Excepturi animi, voluptatem iusto sint illo perferendis similique, odit porro nihil incidunt laboriosam aperiam, optio nemo totam deserunt nobis temporibus? Aut odio adipisci perferendis.</p>
				<h1>Our Expertise</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, ut autem nam suscipit dicta dolores fugit perferendis quod officiis ducimus temporibus vel molestiae magnam, soluta debitis similique tempora praesentium dolorem.</p>
				<div className="profiles">
					<Profile image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" title="John Doe" />
					<Profile image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" title="John Doe" />
					<Profile image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" title="John Doe" />
					<Profile image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" title="John Doe" />
				</div>
				<h1>What do our clients think</h1>
			</div>
		</main>
		<Footer>
			<span>Comapny Name<br />Company Address</span>
			<div style={{width: '300px', height: '100px', background: 'white'}} />
		</Footer>
	</Layout>
)


export default Index
