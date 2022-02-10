import React from 'react';
import "./Right.css";
import {CgMenuGridO} from "react-icons/cg";
import {FaCaretDown, FaFacebookMessenger} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";

function Right() {
  return (
    <div className='headerRight'>
        <div className="userAndName">
            <div className="user"></div>
            <div className="Name">Phyo</div>
        </div>
        <ul>
            <li> <CgMenuGridO /> </li>
            <li> <FaFacebookMessenger /> </li>
            <li> <IoNotifications /> </li>
            <li> <FaCaretDown /> </li>
        </ul>
    </div>
  )
}

export default Right