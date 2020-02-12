// Load .env config
const dotenv = require("dotenv")
if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    // edit below
    title: `Manufacturing demo store`,
    author: `Eli Colpaert`,
    description: `Manufacturing demo store`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    // {
    //   resolve: "gatsby-source-hybris",
    //   options: {
    //     url:
    //       "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com/rest/v2/powertools/",
    //     searchParameters: {
    //       fields: "FULL",
    //       pageSize: "20",
    //       sort: "topRated",
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kibqv4vbf4jq`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/plugins/gatsby-intl`,
        languages: [`de`, `en`, `nl`],
        defaultLanguage: `en`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Tailwind Starter`,
        short_name: `FTS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F7FAFC`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/logo.png`,
      },
    },
  ],
}
