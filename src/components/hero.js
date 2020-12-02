import React from 'react'
import './hero.css'
import { Button } from './Button'
function Hero() {
    return (
        <div className="hero-container">
        
        <video src='/video/video.mp4' autoPlay loop muted></video>
        <h1> ADVENTURE AWAITS</h1>
            <p>What are you Waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' href='#card' to='#card'>GET STARTED</Button>
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' >WATCH TRAILER <i className='far fa-play-circle'></i></Button> */}
            </div>
        </div>
    )
}

export default Hero;
