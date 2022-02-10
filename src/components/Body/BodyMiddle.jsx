import React from 'react'
import "./BodyMiddle.css"
import FeedBox from './FeedBox/FeedBox';
import StoryReel from './StoryReel';

function BodyMiddle() {
  return (
    <div className='bodyMiddle'>
        <StoryReel />
        <FeedBox />
    </div>
  )
}

export default BodyMiddle