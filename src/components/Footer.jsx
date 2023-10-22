import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

function Footer() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
    `);

    return (
        <div>
            <p>Criado e mantido por {data.site.siteMetadata.author}, 2019.</p>
        </div>
    )
}

export default Footer