import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

function Header({onShow}) {
  return (
  
      <div className='header'>
          <Left />
          <Middle />
          <Right onShow={onShow} />
      </div>
   
    
  )
}

export default Header