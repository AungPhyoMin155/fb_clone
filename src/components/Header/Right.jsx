import React from 'react';
import "./Right.css";
import {CgMenuGridO} from "react-icons/cg";
import {FaCaretDown, FaFacebookMessenger} from "react-icons/fa";
import {IoNotifications} from "react-icons/io5";
import { Link } from 'react-router-dom';

function Right({onShow}) {
  return (
    <div className='headerRight'>
        <div className="userAndName">
            <div className="user"></div>
            <div className="Name">Ap</div>
        </div>
        <ul>
            <li> 
              <Link to='/menu'><CgMenuGridO onClick={onShow} /></Link> 
            </li>
            <li> 
              <Link to='/messenger'><FaFacebookMessenger /></Link> 
               
            </li>
            <li> <IoNotifications /> </li>
            <li> <FaCaretDown /> </li>
        </ul>
    </div>
  )
}

export default Right