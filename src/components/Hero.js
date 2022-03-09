import React from 'react'

import hero from '../images/illustration-intro.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className='hero__image'>
            <img src={hero} alt='Hero' />
        </div>

        <div className='hero__text'>
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <div className='hero__text-btn'>
                <button className='btn'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero