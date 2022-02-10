import React from 'react';
import Story from './Story';
import "./StoryReel.css";
import { BsFillPlusCircleFill,BsArrowRightCircle } from "react-icons/bs";

function StoryReel() {
  return (
    <div className='storyReel'>
        <BsArrowRightCircle className='rightArr' />
        <div className="createStory">
            <div className='img'></div>
            <div className="create">
                <div className="user">
                    <BsFillPlusCircleFill />
                </div>
                <h4>Create Story</h4>
            </div>
        </div>
        <Story 
            userName='Ap King'
        />
        <Story 
            userName='John Smith'
        />
        <Story 
            userName='Kitty Lay'
        />
        <Story 
            userName='Mg Gyi'
        />
        
    
    </div>
  )
}

export default StoryReel