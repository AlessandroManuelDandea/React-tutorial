import React from 'react'
import ReactDom from 'react-dom'
import DandeaFace from '../img/presentation/myFace.jpg'
import Email from '../img/presentation/email.svg'
import Linkedin from '../img/presentation/linkedin.svg'

function Presentation() {
    return (
        <div className='Presentation_cont'>
        <div className='Presentation'>
            <img className='Pres_img' src={DandeaFace} width={240}></img>
            <h1>Alessandro Manuel Dandea</h1>
            <h2>Web Developer</h2>
            <div className='links_pre'>
                <div className='link1'>
                    <img src={Email} width={30}></img>
                    <a >email</a>
                </div>
                <div className='link2'>
                    <img src={Linkedin} width={30}></img>
                    <a >Linkedin</a>
                </div>
            </div>
            <h3>About</h3>
            <p>Hey, I'm Alessandro Dandea, a web developer on a mission to elevate user experiences. Currently diving into React, I'm driven by a passion for crafting seamless interactions. Beyond coding, you'll find me hitting the gym, immersing myself in design, and geeking out over AI. I thrive on innovation and creativity, constantly seeking new ways to blend tech and aesthetics.</p>
            <h3>Interests</h3>
            <p>I'm all about that balance between hitting the gym, diving deep into the design world, and geeking out over AI technology. From pumping iron to exploring the nuances of design, and delving into the endless possibilities of AI, I'm fueled by a passion for innovation and creativity.</p>
        </div>
        </div>
    )
}
export default Presentation