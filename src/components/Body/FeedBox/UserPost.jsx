import React from 'react';
import "./UserPost.css";
import { IoEarthSharp } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { ImCross } from "react-icons/im";

function UserPost({name , time , userStatus}) {
  return (
    <div className='userPost'>
        <div className="card">
            <div className="cardHeader">
                <div className='left'>
                    <div className="user"></div>
                    <div className="nameBox">
                        <h4>{name}</h4>
                        <div className="timeAndType">
                            <div className="time">{time}</div>
                            <IoEarthSharp />
                        </div>
                    </div>
                </div>
                <div className="cardHeaderRight">
                    <BsThreeDots className='dots'/>
                    <ImCross className='cross' />
                </div>
                
            </div>
            <div className="cardBody">
                {userStatus}    
            </div>
            <div className="cardFooter">
                <div className="like">
                    <AiOutlineLike />
                    <span>Like</span>
                </div>
                <div className="comment">
                    <GoComment />
                    <span>Comment</span>
                </div>
                <div className="share">
                    <RiShareForwardLine />
                    <span>Share</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default UserPost