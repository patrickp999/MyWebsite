/* eslint-disable prettier/prettier */
const config = require("./src/config");

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
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          // TODO set this for any images in src/content
          // {
          //   resolve: 'gatsby-remark-images',
          //   options: {
          //     maxWidth: 1100,
          //     quality: 90,
          //     linkImagesToOriginal: true,
          //   },
          // },
        ],
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
        // icon: '', // Todo add icon
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@config": "src/config",
          "@content": "src/content",
          "@fonts": "src/fonts",
          "@images": "src/images",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@utils": "src/utils",
        },
        extensions: [],
      },
    },
    // TODO add this
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // TODO add google anlytics
};
