import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faJava, faJs, faGithub, faGolang, faWordpress, faDrupal, faSass, faReact } from "@fortawesome/free-brands-svg-icons";
import "./work-experience.scss";
import "./../../styles/grid.scss";

const WorkExperience = () => {
  const [pib, setPib] = useState("vml");
  const handleWE = (e) => {
    setPib(e.currentTarget.id);
  }
  return (
    <section id='work-experience' className='work-experience'>
      <h2>Where I’ve Worked</h2>
      <div className="conten-we">
        <div className="header">
          <ul>
            <li onClick={e => handleWE(e)} className={pib === "vml" ? 'item-header active' : 'item-header'} id="vml">VML&R</li>
            <li onClick={e => handleWE(e)} className={pib === "puj" ? 'item-header active' : 'item-header'} id="puj">PUJ</li>
          </ul>
        </div>
        <div className="content">
          <DetailExperience option={pib} />
        </div>
      </div>
    </section>
  )
}
const DetailExperience = ({ option }) => {
  switch (option) {
    case "vml":
      return (
        <div className="experience">
          <h4>Front-end Development - <a href="https://www.vmlyr.com/es-co/colombia" target="_blank" rel="noopener noreferrer">VMLY&R</a></h4>
          <p className='date'>July 2021 - November 2022</p>
          <p className='description-experience'>In this job I realized the next activities: </p>
          <ul>
            <li>Front end development</li>
            <li>Implementation of wireframes into content type of CMS</li>
            <li>Implementation of subsites into CMS</li>
            <li>Management of versions with Git</li>
            <li>Implementation of new functionalities according to clients</li>
            <li>Management of users</li>
            <li>Solving of issues into different website</li>
          </ul>
          <p className='description-experience'>Multisite: </p>
          <ul>
            <li><a className='link-websites' href="https://www.sherwin.com.ar/" target="_blank" rel="noopener noreferrer">Sherwin-Williams Conosouth</a></li>
          </ul>
          <p className='description-experience title-tools'>Tools: </p>
          <ul className='tools-used'>
            <li className='wordpress'>
              <FontAwesomeIcon icon={faWordpress} />
            </li>
            <li className='drupal'>
              <FontAwesomeIcon icon={faDrupal} />
            </li>
            <li className='php'>
              <FontAwesomeIcon icon={faPhp} />
            </li>
            <li className='javascript'>
              <FontAwesomeIcon icon={faJs} />
            </li>
            <li className='sass'>
              <FontAwesomeIcon icon={faSass} />
            </li>
            <li className='github'>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </ul>
        </div>
      )
      break;
    case "puj":
      return (
        <div className="experience">
          <h4>Web Aux. - <a href="https://www.javerianacali.edu.co/" target="_blank" rel="noopener noreferrer">Pontifica Universidad Javeriana Cali</a></h4>
          <p className='date'>July 2019 - July 2021</p>
          <p className='description-experience'>In this job I realized the next activities: </p>
          <ul>
            <li>Front end development</li>
            <li>Low and high level wireframes building</li>
            <li>Implementation of wireframes into content type of CMS</li>
            <li>Implementation of subsites into CMS</li>
            <li>Management of versions with Git</li>
            <li>Implementation of new functionalities according to clients</li>
            <li>Management of users</li>
            <li>Solving of issues into different website</li>
          </ul>
          <p className='description-experience'>Websites: </p>
          <ul>
            <li><a className='link-websites' href="https://www.javerianacali.edu.co/" target="_blank" rel="noopener noreferrer">Pontifica Universidad Javeriana Cali</a></li>
            <li><a className='link-websites' href="https://emisora.javerianacali.edu.co/" target="_blank" rel="noopener noreferrer">Javeriana Estéreo Cali</a></li>
            <li><a className='link-websites' href="https://neojaverianos.javerianacali.edu.co/" target="_blank" rel="noopener noreferrer">Neojaverianos</a></li>
          </ul>
          <p className='description-experience title-tools'>Tools: </p>
          <ul className='tools-used'>
            <li className='drupal'>
              <FontAwesomeIcon icon={faDrupal} />
            </li>
            <li className='php'>
              <FontAwesomeIcon icon={faPhp} />
            </li>
            <li className='javascript'>
              <FontAwesomeIcon icon={faJs} />
            </li>
            <li className='github'>
              <FontAwesomeIcon icon={faGithub} />
            </li>
            <li className='sass'>
              <FontAwesomeIcon icon={faSass} />
            </li>
          </ul>
        </div>
      )
      break;

    default:
      break;
  }
}

export default WorkExperience