import React from 'react'
import "./Body.css"
import BodyLeft from './BodyLeft'
import BodyMiddle from './BodyMiddle'
import BodyRight from './BodyRight'

function Body() {
  return (
    <div className='body'>
        <div className='left'>
          <BodyLeft />
        </div>
        <div className="middle">
          <BodyMiddle />
        </div>
        <div className="right">
          <BodyRight />
        </div>
        
    </div>
  )
}

export default Body