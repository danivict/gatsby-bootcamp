/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Bootcamp!`,
    author: `Daniel Victor`,
    description: `Site feito a fim de aprender Gatsby e GraphQL para gerenciamento de conteúdo.`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-plugin-mdx`, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "src",
        "path": `${__dirname}/src/`
      },
      __key: "posts"
    }]
};