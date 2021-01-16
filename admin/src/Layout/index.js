import React from 'react'
import { Header, Footer, Aside } from './components'
import './styles.css'

const Layout = ({children}) => {
    return(
        <div className='layout'>
            <Aside />
            <div className='contenedor'>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout
