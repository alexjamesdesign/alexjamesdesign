import React from 'react';
 
function SkillSet(props) {
 
    const skillsList = props.skillcat.map(skills => (
        <li key={skills.name}><img src={skills.icon} alt={skills.alt} /></li>
    ));
 
    return(
        <ul>
            {skillsList}
        </ul>
    )
 
 
  }
 
export default SkillSet;