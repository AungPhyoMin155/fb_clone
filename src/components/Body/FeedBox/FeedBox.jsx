import React, { useState } from 'react';
import CreateStatus from '../CreateStatus';
import ActiveUser from './ActiveUser';
import "./FeedBox.css";
import UserPost from './UserPost';

function FeedBox() {
  
  const [ userData , setUserData ] = useState([]);
  const receiveDataHandler = (data) => {
    const finalData = [...userData,{data , time:(new Date()).toLocaleString()}];
    setUserData(finalData);
    
  }
  console.log(userData);
  
  return (
    <div className='feedBox'>
        <CreateStatus getData={receiveDataHandler} />
        <ActiveUser />
        {
          userData.length > 0 && userData.map((user,index)=>{
            return (
              <UserPost
                key={index} 
                name="Ap Min"
                userStatus={user.data}
                time={user.time}
              />
            )
          })
        }
        <UserPost
          name="Ap Min"
          userStatus="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam, expedita, reiciendis culpa vero voluptas cumque velit, id corrupti dolorem dolores temporibus atque. Numquam consectetur aliquid laborum odio velit obcaecati?
          "
          time="14 min"
        />
        <UserPost 
          name="John witch"
          userStatus="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam, expedita, reiciendis culpa vero voluptas cumque velit, id corrupti dolorem dolores temporibus atque. Numquam consectetur aliquid laborum odio velit obcaecati?
          "
          time="1hrs"
        />
        
        
    </div>
  )
}

export default FeedBox