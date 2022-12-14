import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faJava, faJs, faGitAlt, faWordpress, faDrupal, faSass, faReact } from "@fortawesome/free-brands-svg-icons";
import "./skills.scss";

const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className="header-skills">
        <h2>My Skills</h2>
        <p>There's my skills which with I have worked during my experience years</p>
      </div>
      <div className="body-skills">
        <ul>
          <li className='java'>
            <FontAwesomeIcon icon={faJava} />
          </li>
          <li className='javascript'>
            <FontAwesomeIcon icon={faJs} />
          </li>
          <li className='php'>
            <FontAwesomeIcon icon={faPhp} />
          </li>
          <li className='react'>
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li className='git'>
            <FontAwesomeIcon icon={faGitAlt} />
          </li>
          <li className='drupal'>
            <FontAwesomeIcon icon={faDrupal} />
          </li>
          <li className='wordpress'>
            <FontAwesomeIcon icon={faWordpress} />
          </li>
          <li className='sass'>
            <FontAwesomeIcon icon={faSass} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills