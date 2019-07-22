import React from 'react'

const DesignerDeveloper = (props) => {
    return (
        <div className={`designer-developer-outer container flex w-full bg-white flex flex-wrap mb-20 ${props.position}`}>
            <div className="dd-text lg:w-3/4">
                <p className="title text-5xl md:text-6xl text-black">{props.title}</p>
                <p className="main-content">{props.content}</p>
            </div>
            
            <div className="dd-img lg:w-1/4" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                
            </div>
        </div>  
    )
}

export default DesignerDeveloper