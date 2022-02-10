import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import "./ActiveUser.css";

function ActiveUser() {
    const users = [1,2,3,4,5,6,7,8,9];
  return (
    <div className='activeUser'>
        
        <MdKeyboardArrowLeft className='arrLeft arr' />
        <MdKeyboardArrowRight className='arrRight arr' />
        {
            users.map(user=>{
                return(
                    <div className="user" key={user}>
                        <span></span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ActiveUser