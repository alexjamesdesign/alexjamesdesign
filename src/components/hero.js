import React from 'react'
import Ellipse from "../images/ellipse.svg"
import LogoColor from "../images/logo-color.svg"

const Hero = () => {
    return (
        <div className="hero-outer flex items-center w-full bg-black">
            <div style={{ backgroundImage: "url(" + Ellipse + ")" }} className="hero-inner text-white w-full text-center flex justify-start self-center bg-no-repeat bg-left h-full">
                <div className="hero-icon flex">
                    <img src={LogoColor} />
                </div>
                <div className="hero-text flex flex-col self-center">
                    Alex James <span className="block">Web Designer // Front-End Developer Nottingham</span>
                </div>
            </div>
        </div>

        
    )
}

export default Hero