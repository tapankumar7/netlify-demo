/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: ["gatsby-plugin-postcss",
   "gatsby-plugin-sass",
   `gatsby-plugin-react-helmet`,
   
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/static/img`,
    },
  },
  // `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-smoothscroll`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.API_KEY,
    },
  },
  ],
};
