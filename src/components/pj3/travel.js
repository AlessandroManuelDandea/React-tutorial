import React from 'react'
import ReactDom from 'react-dom'
import Logo from '../../img/travel/logo_trav.svg'
import CardTrav from './travel_card'
import DataTrav from './Data_trav'
function Travel() {
    const carddata = DataTrav.map((item) => {
        return <CardTrav {...item} />
    })
    return (
        <div className='Travel_cont'>
            <div className='Travel'>
                <header>
                    <nav className='nav_travel'>
                        <img src={Logo} width={50}></img>
                        <h1>Travel journal</h1>
                    </nav>
                </header>
                <main>
                    {carddata}
                </main>
            </div>
        </div>
    )
}
export default Travel