const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'Mdx') {
        const slug = path.basename(node.internal.contentFilePath, '.mdx')


        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
    query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    res.data.allMdx.edges.forEach(edge => {
        console.log(edge);
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    });
}