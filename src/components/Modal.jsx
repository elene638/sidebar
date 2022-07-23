import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './cotext'

function Modal() {

  const {modal, closeModal} = useGlobalContext()

  return (
    <div className={`${modal ? 'modal-on show-modal' : 'modal-on'}`}>
      <div className='modal-container'>
        <div className='title'>
          <h3>modal content</h3>
        </div>
        <div className='btn-container'>
          <button className='close-modal' onClick={closeModal}><FaTimes /></button>
        </div>
      </div>
    </div>
  )
}

export default Modal
