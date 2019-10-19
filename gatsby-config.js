module.exports = {
  siteMetadata: {
    // edit below
    title: `Gatsby Tailwind Blog Starter`,
    author: `Eli Colpaert`,
    description: `Gatsby Tailwind Blog Starter including Netlify CMS`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `colpaerteli`,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/authors`,
        name: `authors`,
      },
    },
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
