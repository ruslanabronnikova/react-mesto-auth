import React from 'react';
import PopupWithForm from './PopupWithForm';

function InfoTooltip({ isOpen, onClose, onTextStatus, onImgStatus }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} >
      <img className='popup__image' src={onImgStatus}/>
      <p className='popup__status-text'>{onTextStatus}</p>
    </PopupWithForm>
  )
}

export default InfoTooltip