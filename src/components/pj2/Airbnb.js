import React from 'react'
import ReactDom from 'react-dom'
import Airbnbsvg from '../../img/airbnb/airbnb.svg'
import cooking from '../../img/airbnb/cooking.jpeg'
import film from '../../img/airbnb/film.jpg'
import guitar from '../../img/airbnb/guitar.jpg'
import gym from '../../img/airbnb/gym.jpg'
import running from '../../img/airbnb/running.jpg'
import makeup from '../../img/airbnb/makeup.jpg'
import soocer from '../../img/airbnb/soocer.jpg'
import swimming from '../../img/airbnb/swiming.jpeg'
import Card from './card_airbnb.js'
import CardData from './CardData.js'


function Airbnb() {
    const carddata = CardData.map((item) => {
        return <Card {...item} />
    })
    return (
        <div className='Airbnb_cont'>
            <div className='Airbnb'>
                <header>
                    <nav className='nav_Airbnb'>
                        <img src={Airbnbsvg} width={30} loading='lazy'></img>
                        <h1>Airbnb</h1>
                    </nav>
                </header>
                <main>
                <div className='top_img_cont'>
                    <div className='top_img_item'>
                        <img src={cooking} width={30} loading='lazy'></img>
                        <img src={film} width={30} loading='lazy'></img>
                    </div>
                    <div className='top_img_item'>
                        <img src={guitar} width={30} loading='lazy'></img>
                        <img src={gym} width={30} loading='lazy'></img>
                        <img src={makeup} width={30} loading='lazy'></img>
                    </div>
                    <div className='top_img_item'>
                        <img src={running} width={30} loading='lazy' ></img>
                        <img src={soocer} width={30} loading='lazy'></img>
                    </div>
                    <div className='top_img_item'>
                        <img src={swimming} width={30} loading='lazy'></img>
                    </div>
                    <div className='top_img_item'>
                    </div>
                </div>
                <div className='Hero_desc'>
                    <h1 >Online experience</h1>
                    <p>The ultimate gateway to unique stays and unforgettable experiences. With a global network of hosts offering everything from cozy apartments to luxurious villas, Airbnb connects adventurers with one-of-a-kind accommodations. Whether it's a serene escape nestled in nature or a vibrant urban oasis, Airbnb invites you to discover, belong, and create cherished memories wherever you go.</p>
                </div>
                <div className='Card_cont'>
                    {carddata}
                </div>
                </main>
            </div>
        </div>
    )
}
export default Airbnb