import React from 'react';
 
function Title(props) {
 
    return(
        <div className="title-container w-full flex items-center">
            <p class={`title bg-black text-5xl md:text-6xl text-center mx-auto z-10 text-${props.textcolor} block px-8`}>{props.title}</p>
        </div>
    )
 
  }
 
export default Title;