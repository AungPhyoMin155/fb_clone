import React from 'react';
import ModalMenu from './ForMenu/ModalMenu';
import ModalMessenger from './ForMessenger/ModalMessenger';
import "./ModalBox.css";

function ModalBox() {
  return (
    <div>
        <ModalMenu /> 
        <ModalMessenger />
    </div>
  )
}

export default ModalBox