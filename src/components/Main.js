import React from 'react'
import ReactDom from 'react-dom'
import Presentation from './pj1/PresentationCard'
import Airbnb from './pj2/Airbnb'
import Travel from './pj3/travel'
import Meme from './pj4/Meme_Generator'

function Main(){
    return(
        <div className='Maincomp'>
            <Presentation></Presentation>
            <Airbnb></Airbnb>
            <Travel></Travel>
            <Meme></Meme>
        </div>
    )
}
export default Main