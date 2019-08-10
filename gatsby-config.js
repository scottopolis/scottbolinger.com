module.exports = {
    siteMetadata: {
        title: `Gatsby Theme Publisher`,
        description: `Gatsby starter site.`,
        author: `Scott Bolinger`,
        twitter: `scottbolinger`,
        siteUrl: `https://scottbolinger.com`,
        wordPressUrl: `https://scottbolinger.com`
      },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [require("tailwindcss")]
        },
      },
      {
        resolve: `gatsby-plugin-emotion`
      },
      {
        resolve: `gatsby-source-graphql`,
        options: {
          // This type will contain remote schema Query type
          typeName: `WPGraphQL`,
          // This is field under which it's accessible
          fieldName: `wpgraphql`,
          // Url to query from
          url: `https://scottbolinger.com/graphql`,
        },
      },
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      'gatsby-plugin-sitemap',
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Merriweather', 'Lato']
          }
        }
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://hollerwp.us16.list-manage.com/subscribe/post?u=d9d0193288fd8270922c02b01&amp;id=8aefa1becd',
        }
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: `UA-6044974-7`,
          head: true,
        },
      },
    ],
}
