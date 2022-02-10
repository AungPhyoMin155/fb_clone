import React, { useState } from 'react'
import "./Left.css";
import { FaFacebook } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

function Left() {
    const [search , setSearch] = useState(false);
    const searchHandler = () => {
        setSearch(true);
    }
  return (
    <div className='headerLeft'>
        <FaFacebook className='facebook' />
        <ImSearch className={`search ${!search?'active':''}`} onClick={searchHandler} /> 
        <div className={`searchBox ${search?'active':''}`}>
            <ImSearch />
            <input
                type="text"
                placeholder='Facebook Search'
            />
        </div>
    </div>
  )
}

export default Left