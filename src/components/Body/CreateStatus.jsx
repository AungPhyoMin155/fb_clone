import React from 'react';
import "./CreateStatus.css";
import { MdVideoCall } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsEmojiLaughing } from 'react-icons/bs';

function CreateStatus() {
  return (
    <div className='createStatus'>
        <div className="up">
            <div className="user"></div>
            <input 
                type="text"
                placeholder="What's on your mind,Phyo"
            />
        </div>
        <div className="bottom">
            <div className="icAndName">
                <MdVideoCall className='ic' />
                <h6>Live video</h6>
            </div>
            <div className="icAndName">
                <FaPhotoVideo className='ic' />
                <h6>Photo/Video</h6>
            </div>
            <div className="icAndName">
                <BsEmojiLaughing className='ic' />
                <h6>Feeling/Activity</h6>
            </div>
           
        </div>
    </div>
  )
}

export default CreateStatus;