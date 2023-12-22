import React from 'react'
import ReactDom from 'react-dom'
import "./style.css"
import Main from './components/Main'
import Navbar from './components/Navbar'

const page = (
    <div>
       <Navbar></Navbar>
        <Main></Main>
    </div>
)
ReactDom.render(page, document.getElementById('root'))