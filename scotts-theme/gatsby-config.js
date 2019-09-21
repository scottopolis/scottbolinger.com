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
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://designbyscott.wpengine.com`,
        blogURI: ''
      },
    },
  ],
}
