import React from 'react'
import "./BodyRight.css"
import ActiveUserAccount from './ForBodyRight/ActiveUserAccount'

function BodyRight() {
  const users = [
    "Ap King","Jhon Smith","Thor Matt","Lily Wolf","Ghost Rider" ,"Spider Love","Mg Mg","Aung Aung"
  ]
  return (
    <div className='bodyRight'>
      <div className="up">
        {
          users.map((user,index)=>{
            return(
              <ActiveUserAccount 
                userName={user}
                key={index}
              />
            )
          })
        }
      </div>  
    </div>
  )
}

export default BodyRight