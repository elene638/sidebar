import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './cotext'

function Home() {

  const {openModal, openSidebar} = useGlobalContext()

  return (
    <div className='home-container'>
      <button className='bars' onClick={openSidebar}><FaBars /></button>
      <div className='modal-btn-contianer'>
        <button className='modal-btn' onClick={openModal}>Show Modal</button>
      </div>
    </div>
  )
}

export default Home