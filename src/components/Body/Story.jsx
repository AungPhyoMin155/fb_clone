import React from 'react';
import "./Story.css";

function Story({userName}) {
  return (
    <div className='story'>
        <div className="user"></div>
        <h4>{userName}</h4>
    </div>
  )
}

export default Story