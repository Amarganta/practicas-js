import React from 'react'
import {Header} from '../Header'
import {Nav} from '../Nav'
import {Main} from '../Main'
import {Aside} from '../Aside'
import {Footer} from '../Footer'

import './layout.css'

export const Layout = () => {
    return(
        <>
            <Header />
            <Nav />
                <div className='columnas'>
                    <div className='div-aside'><Aside /></div>
                    <div className='div-main'><Main /></div>
                </div>
            <Footer />
        </>
    )
}