module.exports = {
  siteMetadata: {
    title: `Oakfield Computer Club`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `svgo`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`
  ],
}
