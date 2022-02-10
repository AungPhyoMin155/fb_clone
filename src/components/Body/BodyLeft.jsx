import React from 'react'
import "./BodyLeft.css";
import { FaUserFriends } from "react-icons/fa";
import { BsCalendarCheck, BsSaveFill, BsStopwatch } from "react-icons/bs";
import { MdGroups, MdOndemandVideo, MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { ImFlag } from 'react-icons/im';


function BodyLeft() {
  return (
    <div className='bodyLeft'>
        <div className="bodyLeftup">
            <div className="uAndN">
                <div className="u"></div>
                <h4>Phyo Lay</h4>
            </div>
            <ul>
                <li>
                    <FaUserFriends className='icon' />
                    <h4>Friends</h4>
                </li>
                <li>
                    <BsSaveFill className='icon' />
                    <h4>Saved</h4>
                </li>
                <li>
                    <MdGroups className='icon' />
                    <h4>Groups</h4>
                </li>
                <li>
                    <MdOndemandVideo className='icon' />
                    <h4>Watch</h4>
                </li>
                <li>
                    <BsStopwatch className='icon' />
                    <h4>Memories</h4>
                </li>
                <li>
                    <ImFlag className='icon' />
                    <h4>Pages</h4>
                </li>
                <li>
                    <BsCalendarCheck className='icon' />
                    <h4>Events</h4>
                </li>
                <li>
                    <MdOutlineArrowDropDownCircle  className='icon' />
                    <h4>See more</h4>
                    
                </li>
            </ul>
        </div>
    </div>
  )
}

export default BodyLeft