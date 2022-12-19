import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./social-networks.scss";

const SocialNetworks = () => {
  return (
    <div className='social-networks'>
      <ul>
        <li>
          <a href="https://github.com/olivarjoseluis" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icon-social-network' icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/joseluis-9/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icon-social-network' icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="mailto:olivarjoseluis9@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icon-social-network' icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=573148021412&text=Hi%20Jose," target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icon-social-network' icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialNetworks