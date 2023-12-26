import React from 'react'
import ReactDom from 'react-dom'

function Card(props) {
    return (

        <div className='travel_card'>
            <img className='img_trav' src={props.img} width={100}></img>
            <div>
                <img className='icon_trav'src={props.icon} width={10}></img>
                <h2 className='country_trav'>{props.country}</h2>
                <a className='maps_trav' href={props.map}>{props.map}</a>
            </div>
            <h1 className='name_trav'>{props.name}</h1>
            <h2 className='date_trav'>{props.date}</h2>
            <p className='desc_trav'>"{props.description}"</p>
        </div>

    )
}
export default Card