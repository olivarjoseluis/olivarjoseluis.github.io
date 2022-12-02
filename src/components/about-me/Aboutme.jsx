import React from 'react';
import profile from "./../../assets/profile/01.png"
import "./../../styles/grid.scss";
import "./about-me.scss";

const Aboutme = () => {
  return (
    <section id="about-me" className='about-me'>
      <div className="container">
        <div className="row">
          <div className="c8">
            <div className="text-about-me">
              <h2>Why should I be part of your team?</h2>
              <p>I’m a <strong>System Engineer</strong> with passion for technology and challenging things. I have 4 years of experience
                as frontend developer, working as a key player team in different projects. for example, I worked building
                web sites with <strong>Drupal</strong> and <strong>Wordpress</strong> during the last 2 years. But also I have knowledge working with 
                <strong>JavaScript</strong>, most of it with <strong>React.js</strong>, I’m willing to participle in any react project so I can share all my
                experience as a Frontend developer.</p>
            </div>

          </div>
          <div className="img-about-me c4">
            <picture>
              <img src={profile} className="profile-picture" alt="Profile Jose Luis Olivar" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme