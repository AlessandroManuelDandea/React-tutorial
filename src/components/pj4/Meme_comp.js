import React from 'react'
import ReactDom from 'react-dom'
import Meme_data from './Meme_data'

function Meme_comp() {
    const [imgmeme, setimgmeme] = React.useState()
    const [topmeme, settopmeme] = React.useState()
    const [botmeme, setbotmeme] = React.useState()

    setInterval(lol,500)
    function lol(){
        
        let topText=document.getElementById('toptext').value
        let botText=document.getElementById('bottext').value
        settopmeme(<h1>{topText}</h1>)
        setbotmeme(<h1>{botText}</h1>)

    }
    
    function GetApi() {

        const ranNum = Math.floor(Math.random() * Meme_data.length)
        const meme = Meme_data[ranNum]
        console.log(meme)
        setimgmeme(<img src={meme.image} alt={meme.title} width={300}></img>)
        console.log(imgmeme)

    }
    return (
        <div className='Meme_generated'>
            <div className='meme_form'>

                <div className='meme_form_Top'>
                    <input id='toptext' type='text' placeholder='Top text' required></input>
                    <input id='bottext' type='text' placeholder='Bottom text' required></input>
                </div>
                <br></br>
                <button className='meme_form_Bot' onClick={GetApi}> Get your meme image</button>
            </div>
            <div className='meme_generated_cont'>
                <div className='meme_generated'>
                {topmeme}
                {imgmeme}
                {botmeme}
                </div>
            </div>

        </div>
    )
}
export default Meme_comp