import React from 'react'
import './hero.css'

import HeroImg from '../../assets/hero1.png'
function Hero() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="health">
            <h2 className='mb-5'>Virtual healthcare <br/> for you</h2>
            <p className='mb-5'>Trafalgar provides progressive, and 
                afforadable <br/> healthcare, accessible 
                on mobile and online <br/> for everyone
            </p>
            <button className='hero-btn'>consult today</button>
        </div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-6">
        <div className="health-img">
            <img src={HeroImg} alt="" />

        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
