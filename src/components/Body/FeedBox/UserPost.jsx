import React from 'react';
import "./UserPost.css";
import { IoEarthSharp } from "react-icons/io5";

function UserPost({name , time}) {
  return (
    <div className='userPost'>
        <div className="card">
            <div className="cardHeader">
                <div className="user"></div>
                <div className="nameBox">
                    <h4>{name}</h4>
                    <div className="timeAndType">
                        <div className="time">{time}</div>
                        <IoEarthSharp />
                    </div>
                </div>
            </div>
            <div className="cardBody">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum exercitationem quos magnam deserunt, vero ducimus dolor distinctio iure impedit temporibus officiis animi voluptates aspernatur unde accusantium eveniet molestiae at vitae.
            </div>
        </div>
    </div>
  )
}

export default UserPost