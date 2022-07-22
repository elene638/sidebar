import React from 'react'
import {FaBars} from 'react-icons/fa'

function Home() {
  return (
    <div className='home-container'>
      <button className='bars'><FaBars /></button>
      <div className='modal-btn-contianer'>
        <button className='modal-btn'>Show Modal</button>
      </div>
    </div>
  )
}

export default Home