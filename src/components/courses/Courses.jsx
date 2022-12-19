
import Course from './course/Course';
import "./../../styles/grid.scss";
import "./courses.scss";
import { useState } from 'react';
import { useEffect } from 'react';

const Courses = () => {

  const totalCertificates = [
    {
      school: "coursera",
      title: "Introduction to User Experience Principles and Processes",
      description: "This UX course provides an introduction to the fields of UX research and design. Learners will gain an understanding of what is involved in UX research, including conducting interviews, evaluating systems, and analyzing systems using principles of good design.",
      url: "https://coursera.org/share/8a2ea1012b2a163e9b04d887bb68b7c5"
    },
    {
      school: "coursera",
      title: "Visual Elements of User Interface Design",
      description: "This design-centric course examines the broad question of what an interface is and what role a designer plays in creating a user interface. Learning how to design and articulate meaning using color, type, and imagery is essential to making interfaces function clearly and seamlessly.",
      url: "https://coursera.org/share/b0427a552496133741bce5ca459f4579"
    },
    {
      school: "udemy",
      title: "React y Firebase: El Curso Completo, Práctico y desde Cero",
      description: "The Complete React JS Course  - Basics to Advanced this course is a complete guide for React JS. Here, you will learn all the concepts required for becoming a front-end React JS developer.",
      url: "https://coursera.org/share/b0427a552496133741bce5ca459f4579"
    },
    {
      school: "platzi",
      title: "Asynchronous JavaScript",
      description: "Asynchronous JavaScript can be tricky even for experienced developers, but it’s part of what makes JavaScript such a powerful and efficient programming language.",
      url: "https://platzi.com/p/olivarjoseluis9/curso/3175-asincronismo-js/diploma/detalle/"
    },
    {
      school: "platzi",
      title: "Front-end developer",
      description: "The front-end developer is a fundamental part of any web team, working closely with back-end developers. Whereas the back-end developer focuses on the internal functioning of the application - the “plumbing” - the front-end developer builds the interface that users see.",
      url: "https://platzi.com/p/olivarjoseluis9/curso/2467-frontend-developer/diploma/detalle/"
    },
    {
      school: "platzi",
      title: "JavaScript Package Manager",
      description: "A package manager is a tool developers use to automate finding, downloading, installing, configuring, upgrading, and removing a system's packages.",
      url: "https://platzi.com/p/olivarjoseluis9/curso/3578-npm/diploma/detalle/"
    },
    {
      school: "platzi",
      title: "Professional course of Git and GitHub",
      description: "In this course, you’ll learn how to keep track of the different versions of your code and configuration files using a popular version control system (VCS) called Git. We'll also go through how to setup an account with a service called GitHub so that you can create your very own remote repositories to store your code and configuration.",
      url: "https://platzi.com/p/olivarjoseluis9/curso/3578-npm/diploma/detalle/"
    },
    {
      school: "platzi",
      title: "Object-Oriented JavaScript",
      description: "This course is designed to teach web developers how to utilize the various object-oriented programming features within JavaScript. Object-oriented programming allows developers to build applications with reusable and maintainable blocks of code, which leads to efficiency and simplified software design.",
      url: "https://platzi.com/p/olivarjoseluis9/curso/1474-oop/diploma/detalle/"
    },
    {
      school: "platzi",
      title: "Go Course: OOP and Concurrency",
      description: "Learn how to implement concurrent programming in Go. Explore the roles of channels and goroutines in implementing concurrency. Topics include writing goroutines and implementing channels for communications between goroutines. ",
      url: "https://platzi.com/p/olivarjoseluis9/curso/1474-oop/diploma/detalle/"
    },
    {
      school: "platzi",
      title: "WebPack",
      description: "In this course we will build fully functional, production ready Webpack configuration from scratch. We will start from the very simple things and then gradually move towards more advanced topics. Each lesson builds on top of the previous ones, so it is easy to follow.",
      url: "https://platzi.com/p/olivarjoseluis9/curso/2242-webpack/diploma/detalle/"
    }
  ]
  const [certificates, useCertificates] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const seeLess = () => {
    useCertificates(totalCertificates.slice(0, 6));
    setIsOpen(false);
  }
  const seeMore = () => {
    useCertificates(totalCertificates);
    setIsOpen(true);
  }
  useEffect(() => {
    useCertificates(totalCertificates.slice(0, 6));
  }, []);
  return (
    <section id='courses' className='card courses'>
      <div className="header-courses">
        <h2>Courses</h2>
      </div>
      <div className="content-courses">
        <div className="row">
          {
            certificates.map((certificate, i) => (
              <div key={i} className="c4">
                <Course content={certificate} />
              </div>
            ))
          }
        </div>
        <div className={isOpen ? 'see-more open' : 'see-more'}>
          {!isOpen ? <button className='btn btn-see-more' onClick={() => seeMore()}>See More</button> : <button className='btn btn-see-more' onClick={() => seeLess()}>See Less</button>}
        </div>
      </div>
    </section>
  )
}

export default Courses