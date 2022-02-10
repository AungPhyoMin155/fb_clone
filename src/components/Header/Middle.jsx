import React from 'react';
import "./Middle.css";
import { AiFillHome }  from "react-icons/ai";
import { MdGroups, MdOndemandVideo }  from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";

function Middle() {
  return (
    <div className='headerMiddle'>
        <ul>
            <li><a href="#" className='active'> <AiFillHome /> </a></li>
            <li><a href="#"> <MdOndemandVideo /> </a></li>
            <li><a href="#"> <MdGroups /> </a></li>
            <li><a href="#"> <SiFacebookgaming /> </a></li>
        </ul>
    </div>
  )
}

export default Middle