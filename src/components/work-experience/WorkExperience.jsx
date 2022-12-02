import React, { useState } from 'react';
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
          <ul>
            <li>Develoment Frontend</li>
            <li>Content Managent</li>
            <li>Issues Solver</li>
          </ul>
        </div>
      )
      break;
    case "puj":
      return (
        <div className="experience">
          <h4>Web Aux. - <a href="https://www.javerianacali.edu.co/" target="_blank" rel="noopener noreferrer">Pontifica Universidad Javeriana Cali</a></h4>
          <p className='date'>July 2019 - July 2021</p>
          <ul>
            <li>Front-end Development</li>
            <li>Content Managent</li>
          </ul>
        </div>
      )
      break;

    default:
      break;
  }
}

export default WorkExperience