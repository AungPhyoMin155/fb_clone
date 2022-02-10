import React from 'react'
import "./ActiveUserAccount.css";

function ActiveUserAccount({userName}) {
  return (
    <div className='activeUserAcc'>
        <div className="user">
            <span></span>
        </div>
        <div className="userName">{userName}</div>
    </div>
  )
}

export default ActiveUserAccount