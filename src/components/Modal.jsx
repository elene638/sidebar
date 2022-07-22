import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Modal() {
  return (
    <div className={`modal-on show-modal`}>
      <div className='modal-container'>
        <div className='title'>
          <h3>modal content</h3>
        </div>
        <div className='btn-container'>
          <button className='close-modal'><FaTimes /></button>
        </div>
      </div>
    </div>
  )
}

export default Modal

//show-modal