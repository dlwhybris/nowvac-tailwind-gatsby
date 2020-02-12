const queries = require("./src/utils/algolia")
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
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries,
                chunkSize: 10000, // default: 1000
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
