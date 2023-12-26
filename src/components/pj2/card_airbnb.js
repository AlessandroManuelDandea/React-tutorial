import React from 'react'
import ReactDom from 'react-dom'
import Star from '../../img/airbnb/star.svg'

function Card(props) {
    return (
        
            <div className='card'>

                <img className='Card_img' src={props.img} width={200}></img>
                <div className='ratting_cont'>
                    <img src={Star} width={20}></img>
                    <p>{props.rating}/5</p>
                </div>
                <p className='description'>{props.description}</p>
                <p className='price'>{props.price}$ pp</p>
            </div>
        
    )
}
export default Card