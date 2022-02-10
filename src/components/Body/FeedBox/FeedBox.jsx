import React from 'react';
import CreateStatus from '../CreateStatus';
import ActiveUser from './ActiveUser';
import "./FeedBox.css";
import UserPost from './UserPost';

function FeedBox() {
  return (
    <div className='feedBox'>
        <CreateStatus />
        <ActiveUser />
        <UserPost
          name="Ap Min"
          time="14 min"
        />
        <UserPost 
          name="John witch"
          time="1hrs"
        />
    </div>
  )
}

export default FeedBox