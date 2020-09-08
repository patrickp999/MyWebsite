require("dotenv").config();

/* eslint-disable prettier/prettier */
const config = require("./src/config");

const options = {
  host: process.env.CONTENTFUL_HOST,
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CPA_TOKEN,
};

if (process.env.NODE_ENV === "production") {
  options.host = "cdn.contentful.com";
  options.accessToken = "uiGlUbvvJ1JSkb0zUu8WbmZdDPPdePW1xhveAMdEIYk";
}

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: options,
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
};
