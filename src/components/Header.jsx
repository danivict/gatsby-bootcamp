import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { title, header, navList, navItem, activeNavItem } from './header.module.scss'

function Header() {
    const data = useStaticQuery(graphql`
    query  {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);


    return (
        <header className={header}>
            <h1 >
                <Link to='/' className={title}>
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to='/about'>Sobre</Link>
                    </li>
                    <li>
                        <Link className={navItem} activeClassName={activeNavItem} to='/contact'>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header