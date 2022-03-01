import React from 'react';
import "./ModalMessenger.css";
import { BsFullscreen, BsThreeDots } from "react-icons/bs";
import { RiVideoAddFill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { ImSearch } from 'react-icons/im';
import ShowMessage from './ShowMessage';

function ModalMessenger() {
  return (
    <div className='modalMessenger'>
        <div className="header">
          <h2>Messenger</h2>
          <div className="headerRight">
            <BsThreeDots className='icon' />
            <BsFullscreen className='icon' />
            <RiVideoAddFill className='icon' />
            <BiEdit className='icon' />
          </div>
        </div>

        <div className="searchMessenger">
          <ImSearch className="icon" />
          <input type="text" placeholder='Search Messenger' />
        </div>
        <div className="messageBox">
          <ShowMessage
            time='7hrs'
            userName="Phyo lay"
            message="Hello"
          />
          <ShowMessage 
            time='13hrs'
            userName='Ap King'
            message='hi bro'
          />
        </div>
        <div className="modalMessengerFooter">
          See all in Messenger
        </div>
    </div>
  )
}

export default ModalMessenger