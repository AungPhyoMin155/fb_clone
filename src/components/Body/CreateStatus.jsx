import React, { useState } from 'react';
import "./CreateStatus.css";
import { MdVideoCall } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsEmojiLaughing } from 'react-icons/bs';

function CreateStatus({getData}) {

    const [status , setStatus] = useState('');

    const createStatusHandler = (e) => {
        e.preventDefault();
        getData(status)
        setStatus('');
    }
  return (
    <form className='createStatus'>
        <div className="up">
            <div className="user"></div>
            <input 
                onChange={e=>(setStatus(e.target.value))}
                value={status}
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
        <button onClick={createStatusHandler} type='submit'>Submit</button>
    </form>
  )
}

export default CreateStatus;