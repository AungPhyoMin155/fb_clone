import React from 'react';
import "./Header.css";
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

function Header() {
  return (
    <div className='header'>
        <Left />
        <Middle />
        <Right />
    </div>
  )
}

export default Header