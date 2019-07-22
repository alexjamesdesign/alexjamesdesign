import React from 'react'
import Ellipse from "../images/ellipse.svg"
import LogoColor from "../images/logo-color.svg"

const Hero = () => {
    return (
        <div className="hero-outer flex items-center w-full bg-black bg-no-repeat justify-center vh-9" style={{ backgroundImage: "url(" + Ellipse + ")" }}>
            <div className="hero-inner text-white w-full text-center flex flex-wrap tablet:flex-no-wrap justify-center tablet:justify-start content-center h-full">
                <img className="hero-icon s:w-1/4 m:width-48" src={LogoColor} />
                <div className="hero-text flex flex-col self-center p-2 tablet:p-0 tablet:pl-8 tablet:pb-5 w-full tablet:w-auto">
                    <h1 className="width-1/4 text-5xl tablet:text-6xl text-center tablet:text-left">Alex James <span className="block text-xl text-center tablet:text-left">Web Designer // <span className="block text-xl">Front-End Developer Nottingham</span></span></h1>
                </div>
            </div>
        </div>

        
    )
}

export default Hero