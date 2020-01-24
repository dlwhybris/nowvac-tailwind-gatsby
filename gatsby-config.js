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
    {
      resolve: "gatsby-source-hybris",
      options: {
        url:
          "https://api.c10zqj-delawarec1-d1-public.model-t.cc.commerce.ondemand.com/rest/v2/powertools/products/search?currentPage=0&fields=FULL&pageSize=20",
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
