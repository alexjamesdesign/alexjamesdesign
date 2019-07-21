import React from 'react'
import Img from "gatsby-image"

const DesignerDeveloper = (props) => {
    return (
        <div className={`designer-developer-outer flex w-full bg-white flex flex-wrap m-4 ${props.position}`}>
            <div className="dd-text lg:w-3/4">
                <p className="title text-5xl md:text-6xl text-black">{props.title}</p>
                <p className="main-content">{props.content}</p>
            </div>
            
            <div style={{ backgroundImage: `url(${props.backgroundImage})` }} className="dd-img lg:w-1/4 bg-black">

            </div>
        </div>  
    )
}

export default DesignerDeveloper