import React from 'react'
import ReactDom from 'react-dom'
import Presentation from './PresentationCard'

function Main(){
    return(
        <div className='Maincomp'>
            <h1 >Fun Facts about React</h1>
            <ul>
                <li>Born in 2013</li>
                <li>created by jordan walke</li>
                <li>100k stars on github</li>
                <li>maintained by facebook</li>
            </ul>
            <Presentation></Presentation>
        </div>
    )
}
export default Main