import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import "./button-top.scss";

const ButtonTop = () => {
  const [isActive, setIsActive] = useState(false);
  window.addEventListener("scroll", (event) => {
    if (document.body.getBoundingClientRect().top < -100) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}
      className={isActive ? "top active" : "top"}><FontAwesomeIcon icon={faAngleUp} /></button>
  )
}

export default ButtonTop