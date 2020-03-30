module.exports = {
	siteMetadata: {
		title: 'Gatsby Template',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Gatsby Template',
				short_name: 'Gatsby Template',
				start_url: '/',
				background_color: '#F6F6F6',
				theme_color: '#366897',
				display: 'standalone',
			},
		},
		{
			resolve: 'gatsby-plugin-offline',
			// options: {
			// 	precachePages: ['/about/', '/projects/*'],
			// },
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		// {
		//   resolve: `@kentico/gatsby-source-kontent`,
		//   options: {
		//     deliveryClientConfig: {
		//       projectId: ``,
		//     },
		//     languageCodenames: [
		//       `default`,
		//       `de-DE`,
		//       `cs-CZ`,
		//     ]
		//   }
		// }
	],
}
