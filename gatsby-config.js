module.exports = {
  siteMetadata: {
    title: `PezzLog`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
