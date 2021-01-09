import React from 'react'
import './main.css'
import { News, Services } from './components'

export const Main = () => {
    return(
        <main className='main'>
            <News />
            <Services />
        </main>
    )
}