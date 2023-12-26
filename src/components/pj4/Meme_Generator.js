import React from 'react'
import ReactDom from 'react-dom'
import Doge from '../../img/meme/doge.png'
import Meme_comp from './Meme_comp'

function Meme_Generator() {

    return (
        <div className='Meme_Generator_cont'>
            <div className='Meme_Generator'>
                <header>
                    <nav className='meme_nav'>
                        <div className='meme_nav_left'>
                            <img src={Doge} width={50}></img>
                            <h1>Meme Generator</h1>
                        </div>
                        <h2 className='meme_nav_right'>pj-4</h2>
                    </nav>
                </header>
                <main>
                    <Meme_comp></Meme_comp>
                </main>
            </div>
        </div>
    )
}
export default Meme_Generator