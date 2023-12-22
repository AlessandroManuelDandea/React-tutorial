import React from 'react'
import ReactDom from 'react-dom'
import Reactlogo from '../img/logo192.png'

function Navbar() {
    return (
        <nav className='nav_main'>
            <div className='leftnav'>
                <img src={Reactlogo} width={60}></img>
                <h1>React Logo</h1>
            </div>
            <h2 className='rightnav'>React course- pg1</h2>
        </nav>
    )
}
export default Navbar