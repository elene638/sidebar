import React from 'react'
import {links, social} from './data'
import Photo from '../images/logo.svg'
import {FaTimes} from 'react-icons/fa'


function Sidebar() {
  return (
    <div className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <img src={Photo} alt='logo'/>
        <button>
        <FaTimes />
        </button>
      </div>
      <div className='sidebar-content'>
        <ul className='links'>
          {links.map((link) => {
            const {id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className='social-icons'>
          {social.map((link) => {
            const {id, url, icon} = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar