import React from 'react';
import "./course.scss";

const Course = ({ content }) => {

  return (
    <div className='card'>
      <a href={content.url} target="_blank" rel="noopener noreferrer">
        <div className="header-card">
          <div className={`icon-school ${content.school}`}></div>
        </div>
        <div className="body-card">
          <p className='title-card'>{content.title}</p>
          <p className='description-card'>{content.description.slice(0, 120)}...</p>
        </div>
      </a>
    </div>
  )
}

export default Course