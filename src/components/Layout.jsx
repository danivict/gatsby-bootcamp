import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.scss'
import { container, content } from './layout.module.scss'

function Layout({ children }) {
    return (
        <div className={container}>
            <div className={content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout