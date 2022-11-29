import React from 'react'
import SwitchModeTheme from './switch-mode-theme/SwitchModeTheme';
import "./nav.scss";

function Nav() {
  return (
    <header>
      <a href='/' className='navbar-brand' aria-label='Jose Luis Olivar'><span>JL</span></a>
      <ul className='links-nav'>
        <li>
          <a href='#about-me' aria-label='About Jose Luis Olivar'>About me</a>
        </li>
        <li>
          <a href='#work-experience' aria-label='Work experience of Jose Luis Olivar'>Work experience</a>
        </li>
        <li>
          <a href='#education' aria-label='Education of Jose Luis Olivar'>Education</a>
        </li>
        <li>
          <a href='#get-in-touch' aria-label='Get in touch with Jose Luis Olivar'>Get in touch</a>
        </li>
        <li><SwitchModeTheme /></li>
      </ul>
    </header>
  )
}

export default Nav