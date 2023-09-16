import React from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css'

function HeroSection({
    lightBg, 
    topLine, 
    lightText, 
    lightTextDesc, 
    headline, 
    description,
    title,
    bottomLine, 
    buttonLabel, 
    img, 
    alt, 
    imgStart
}) {
  return (
    <div id='herosection'>
        <div className = {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className ="container">
                <div className ="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <div className="heading">{headline}</div>
                            <div className="Title">{title}</div>
                            <div className="description">{description}</div>
                            <div className="bottom-line">{bottomLine}</div>

                            <Link to="/form">
                                <Button  buttonSize='btn--wide'>{buttonLabel}
                                </Button>
                            </Link> 
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeroSection;