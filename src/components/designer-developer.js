import React from 'react'
import SkillSet from "./skills"
 
const DesignerDeveloper = (props) => {
 
    return (
        <div className={`designer-developer-outer container flex w-full flex flex-wrap mb-20 tablet:mb-0 ${props.position}`}>
            <div className="dd-text tablet:w-3/4">
                <p className="title text-5xl md:text-6xl text-black">{props.title}</p>
                <p className="main-content">{props.content}</p>
 
                <SkillSet skillcat={props.skillcat} />
            </div>
 
            <div className="dd-img w-full tablet:w-1/4 h-64 tablet:h-auto" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
 
            </div>
        </div>
    )
}
 
export default DesignerDeveloper