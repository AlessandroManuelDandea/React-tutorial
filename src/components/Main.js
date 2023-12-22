import React from 'react'
import ReactDom from 'react-dom'
import Presentation from './PresentationCard'
import Airbnb from './Airbnb'

function Main(){
    return(
        <div className='Maincomp'>
            <Presentation></Presentation>
            <Airbnb></Airbnb>
        </div>
    )
}
export default Main