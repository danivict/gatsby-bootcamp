import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const query = graphql`
    query ($slug: String){
        allMdx(filter: {fields: {slug: {eq: $slug}}}) {
        edges {
            node {
            frontmatter {
                title
                date
            }
            excerpt
            }
        }
        }
    }
`

function Blog(props) {
    return (
        <Layout>
            <h1>{props.data.allMdx.edges[0].node.frontmatter.title}</h1>
            <p>{props.data.allMdx.edges[0].node.frontmatter.date}</p>
            <p>{props.data.allMdx.edges[0].node.excerpt}</p>
        </Layout>
    )
}

export default Blog