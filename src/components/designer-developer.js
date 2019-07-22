import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

console.log(designerBgImage)

const DesignerDeveloper = (props) => {
    return (
        <div className={`designer-developer-outer flex w-full bg-white flex flex-wrap m-4 ${props.position}`}>
            <div className="dd-text lg:w-3/4">
                <p className="title text-5xl md:text-6xl text-black">{props.title}</p>
                <p className="main-content">{props.content}</p>
            </div>
            
            <div className="dd-img lg:w-1/4 bg-black" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                
            </div>
        </div>  
    )
}

export default DesignerDeveloper