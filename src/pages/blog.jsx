import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

function Blog() {
    const posts = useStaticQuery(graphql`
    query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
              excerpt(pruneLength: 30)
            }
          }
        }
      }
    `).allMdx.edges;

    return (
        <Layout>
            <h2>Blog</h2>
            <ol>
                {
                    posts.map((post, i) => {
                        return (
                            <li key={i}>
                                <Link to={'/blog/' + post.node.fields.slug}>
                                    <strong>{post.node.frontmatter.title}</strong>
                                </Link>
                                <p style={{ fontSize: '.8rem', textDecorationLine: 'none', marginBottom: '0' }}>Descrição: <em>{post.node.excerpt}</em></p>
                                <p style={{ fontSize: '.8rem', textDecorationLine: 'none' }}>Data: {post.node.frontmatter.date}</p>
                            </li>
                        );
                    })
                }
            </ol>

        </Layout>
    )
}

export default Blog

export function Head() {
    return (
        <title>Blog</title>
    )
}