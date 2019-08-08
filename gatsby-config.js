module.exports = {
    siteMetadata: {
        title: `Gatsby Theme Publisher`,
        description: `Gatsby starter site.`,
        author: `Scott Bolinger`,
        twitter: `scottbolinger`,
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
            endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=39bce0bcbbab9f0d9a6f57112&amp;id=b7df6d6743',
        }
      }
    ],
}
