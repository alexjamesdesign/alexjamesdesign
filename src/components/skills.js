import React from 'react';

import WordPressIcon from "../images/icon-wordpress.svg"
import ReactIcon from "../images/icon-react.svg"

function SkillSet(props) {
    const devskills = [
        {
            name: 'React',
            icon: `${WordPressIcon}`,
            alt: 'React Icon'
        },
        {
            name: 'WordPress',
            icon: `${ReactIcon}`,
            alt: 'WordPress Icon'
        }
    ]

    const designskills = [
        {
            name: 'XD',
            icon: `${WordPressIcon}`,
            alt: 'React Icon'
        },
        {
            name: 'Figma',
            icon: `${ReactIcon}`,
            alt: 'Figma Icon'
        }
    ]

    const skillsListType = props.skillcat

    const skillsList = devskills.map(skill => (
        <li><img src={skill.icon} /></li>
    ))
    
    return (
        <ul>
            {skillsList}
        </ul>
    );
  }

export default SkillSet;