import React from 'react'
import Bar from '../components/Bar'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Layout from '../components/Layout'
import Container from '../components/Container'
import '../assets/styles/style.scss'
import Jumbotron from '../components/Jumbotron'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const navItems = [
	{
		title: 'Home',
		address: '/',
		active: false,
	},
	{
		title: 'About',
		address: '/about',
		active: false,
	},
	{
		title: 'The Team',
		address: '/person',
		active: true,
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

const Person = () => (
	<Container>
		<div className="container">
			<Bar left="info@testemail.com" right="call us now 020 341 123123" />
			<Header>
				<img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="200px" alt="Logo" />
			</Header>
			<Nav items={navItems} />
			<section className="person">
				<Layout>
					<Jumbotron justifyContent="flex-start" alignItems="flex-end" image="https://images.unsplash.com/photo-1489410342162-b4b300a0bb15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
						<div className="jumbotron">
							<div className="person-name">
								<Title>John Doe</Title>
							</div>
							<div className="person-title">
								<Title>Barrister</Title>
							</div>
						</div>
					</Jumbotron>
					<div className="content">
						<div className="flex">
							<div className="left">
								<div className="carousel">
									<Carousel>
										<Card>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptas nisi nobis corporis praesentium, voluptatibus, molestiae sint dolorum repudiandae asperiores perferendis perspiciatis ullam adipisci ex sapiente excepturi expedita? Temporibus, consequatur!</Card>
										<Card>1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptas nisi nobis corporis praesentium, voluptatibus, molestiae sint dolorum repudiandae asperiores perferendis perspiciatis ullam adipisci ex sapiente excepturi expedita? Temporibus, consequatur!</Card>
										<Card>2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptas nisi nobis corporis praesentium, voluptatibus, molestiae sint dolorum repudiandae asperiores perferendis perspiciatis ullam adipisci ex sapiente excepturi expedita? Temporibus, consequatur!</Card>
									</Carousel>
								</div>
								<h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos consectetur distinctio. Consectetur harum optio veritatis repudiandae corrupti quasi. Unde deleniti expedita autem at officiis sequi maxime minus odit molestiae.</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione tenetur vitae rerum accusantium iusto quod? Perspiciatis at, illo maiores neque ad porro laboriosam excepturi aliquam. Voluptas, dolor iusto temporibus facilis quas non, animi consectetur dicta alias nam unde omnis ex odit. Quam ab recusandae, alias, laudantium nesciunt quibusdam veniam accusamus saepe veritatis quo animi fugiat incidunt sunt culpa iure maxime fugit quidem suscipit ipsum laborum aut. Atque iure mollitia culpa fugiat voluptate! Dolor repudiandae fugit nobis illo ad unde dolorum nulla, tempore at quidem, blanditiis ut velit eaque ea quia debitis, illum suscipit nisi officiis minima veritatis repellat reprehenderit autem error? Ipsum natus esse sequi neque molestias officiis, nulla numquam qui pariatur error corporis vel ullam porro modi, sunt at nostrum. Nesciunt natus quas cumque autem reprehenderit voluptatibus id iure illo laborum. Provident assumenda consequuntur enim eveniet eum. Corrupti suscipit debitis excepturi ad error dicta exercitationem maxime assumenda consectetur, quae sunt earum labore voluptates iure tempore ipsum eum harum perspiciatis aliquid. Officia voluptates est, id deleniti fugiat dignissimos impedit minima ad assumenda nobis sapiente quae laborum labore, ea ab sed nam illum cum eos fugit reiciendis molestiae. Earum, consectetur. Id rem explicabo eum, doloremque quam officia veritatis nam harum?</p>
							</div>
							<div className="right">
								<div className="info">
									<div className="title">
										At a Glance
									</div>
									<div className="content">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum quisquam blanditiis distinctio unde quas consectetur doloribus reiciendis dolorum nemo velit quia, asperiores iste corporis deleniti soluta expedita obcaecati ipsum?
									</div>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</section>
		</div>
		<Footer>
			<span>Comapny Name<br />Company Address</span>
			<div style={{width: '300px', height: '100px', background: 'white'}} />
		</Footer>
	</Container>
)


export default Person
