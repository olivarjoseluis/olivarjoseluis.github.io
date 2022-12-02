import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { } from '@fortawesome/free-solid-svg-icons';
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
          <a href="https://twitter.com/olivarluisjose" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='icon-social-network' icon={faTwitter} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialNetworks