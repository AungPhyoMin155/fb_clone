import React from 'react';
import { BsCalendarCheck, BsCalendarEventFill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';
import { ImFlag, ImSearch } from 'react-icons/im';
import { MdGroups, MdOutlineEmojiFlags } from 'react-icons/md';
import { BiEdit, BiNews } from 'react-icons/bi';
import "./ModalMenu.css";
import { SiFacebookgaming } from 'react-icons/si';
import { IoBook } from 'react-icons/io5';
import { RiVideoAddFill } from 'react-icons/ri';
import { HiSpeakerphone } from 'react-icons/hi';

function ModalMenu() {
  return (
    <div className='modalMenu'>
        <h1>Menu</h1>
        <div className="cardBox">
            <div className="cardBoxLeft">
                <div className="searchMenu">
                    <ImSearch className='icon' />
                    <input type="text" placeholder='Search Menu' />
                </div>
                <div className="social">
                    <h3>Social</h3>
                    <div className="events div">
                        <BsCalendarCheck className='icon' />
                        <div className="event">
                            <h4>Events</h4>
                            <div>Organize or find events and other</div>
                            <div>things to do online and nearby.</div>
                        </div>
                    </div>
                    <div className="friends div">
                        <FaUserFriends className='icon' />
                        <div className="firend">
                            <h4>Friends</h4>
                            <div>Search for friends or people you</div>
                            <div>may know.</div>
                        </div>
                        
                    </div>
                    <div className="groups div">
                        <MdGroups className='icon' />
                        <div className="group">
                            <h4>Groups</h4>
                            <div>Connect with people who share</div>
                            <div>your interests.</div>
                        </div>
                        
                    </div>
                    <div className="newsFeed div">
                        <BiNews className='icon' />
                        <div className="newFeed">
                            <h4>News Feed</h4>
                            <div>See relevants posts from people </div>
                            <div>and pages you follow.</div>
                        </div>
                    </div>
                    <div className="pages div">
                        <ImFlag className='icon' />
                        <div className="page">
                            <h4>Pages</h4>
                            <div>Discover and connect with</div>
                            <div>businesses on facebook.</div>
                        </div>
                    </div>

                </div>
                <div className="entertainment">
                    <h3>Entertainment</h3>
                    <div className="gamingVideos">
                        <div className="events div">
                            <SiFacebookgaming className='icon' />
                            <div className="event">
                                <h4>Gaming Videos</h4>
                                <div>Watch and connect with your</div>
                                <div>things to do online and nearby.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cardBoxRight">
                <h3>Create</h3>
                <div className="createUp">
                    <div className="div">
                        <BiEdit className='icon' />
                        <h4>Post</h4>
                    </div>
                    <div className="div">
                        <IoBook className='icon' />
                        <h4>Story</h4>
                    </div>
                    <div className="div">
                        <RiVideoAddFill className='icon' />
                        <h4>Room</h4>
                    </div>
                </div>
                <div className="createDown">
                    <div className="div">
                        <MdOutlineEmojiFlags className='icon' />
                        <h4>Page</h4>
                    </div>
                    <div className="div">
                        <HiSpeakerphone className='icon' />
                        <h4>Ad</h4>
                    </div>
                    <div className="div">
                        <MdGroups className='icon' />
                        <h4>Group</h4>
                    </div>
                    <div className="div">
                        <BsCalendarEventFill className='icon' />
                        <h4>Event</h4>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ModalMenu