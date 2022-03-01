import React from 'react'
import "./ShowMessage.css"

const ShowMessage = ({userName , time ,message}) => {
  return (
    <div className='showMessage'>
        <div className="userAndMessage">
            <div className="user"></div>
            <div className="message">
                <h4>{userName}</h4>
                <div className="mAndTime">
                    <div className="m">{message}</div>
                    <div className="time">
                        .{time}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowMessage