import React from 'react';
 
function SkillSet(props) {
 
    const skillsList = props.skillcat.map(skills => (
        <li key={skills.name} className="pr-4 pt-2"><img src={skills.icon} alt={skills.alt} /></li>
    ));
 
    return(
        <ul className="skill-icons flex mx-6">
            {skillsList}
        </ul>
    )
 
 
  }
 
export default SkillSet;