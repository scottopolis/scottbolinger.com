module.exports = {
  siteMetadata: {
    title: 'Scott Bolinger',
    description: 'Modern web development, mobile apps, WordPress, and more.',
    author: 'Scott Bolinger',
    twitter: '@scottbolinger',
    siteUrl: `https://scottbolinger.com`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-publisher`,
      options: {
        menuName: `Primary`,
        gaTrackingId: 'UA-6044974-7',
        mailChimpEndpoint: 'https://hollerwp.us16.list-manage.com/subscribe/post?u=d9d0193288fd8270922c02b01&amp;id=8aefa1becd',
        dynamicComments: 1,
        wordPressUrl: `https://designbyscott.wpengine.com`,
        blogURI: ''
      },
    },
  ],
}
