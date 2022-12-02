import React, { useState } from 'react'
import SwitchModeTheme from './switch-mode-theme/SwitchModeTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import "./../nav/nav.scss";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <a href='/' className='navbar-brand' aria-label='Jose Luis Olivar'><span>JL</span></a>
      <div className="mobile-items">
        <ul>
          <li className='switch-mobile'><SwitchModeTheme /></li>
          <li className='burger-button' onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars} /></li>
        </ul>
      </div>
      <div className={isOpen ? 'button-close active' : 'button-close'} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faX} />
      </div>
      <ul className={isOpen ? 'links-nav active' : 'links-nav'}>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <a href='#about-me' aria-label='About Jose Luis Olivar'>About me</a>
        </li>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <a href='#work-experience' aria-label='Work experience of Jose Luis Olivar'>Work experience</a>
        </li>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <a href='#skills' aria-label='Education of Jose Luis Olivar'>Skills</a>
        </li>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <a href='#courses' aria-label='Education of Jose Luis Olivar'>Courses</a>
        </li>
        <li onClick={() => setIsOpen(false)} className='link-nav'>
          <a href='#get-in-touch' aria-label='Get in touch with Jose Luis Olivar'>Get in touch</a>
        </li>
        <li className='switch-desktop'><SwitchModeTheme /></li>
      </ul>
    </header >
  )
}

export default Nav