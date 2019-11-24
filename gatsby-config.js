const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PatrickPuga`,
        short_name: `PatrickPuga`,
        start_url: `/`,
        background_color: config.darkBlueBackgroundColor,
        theme_color: config.lightBlueBackgroundColor,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // TODO Update icon
      },
    },
    // TODO add this
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // TODO add google anlytics
};
