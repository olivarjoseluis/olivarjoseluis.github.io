import { useSelector } from 'react-redux';
import './App.css'
import Aboutme from './components/about-me/Aboutme'
import Courses from './components/courses/Courses';
import GetInTouch from './components/get-in-touch/GetInTouch';
import Great from './components/great/Great';
import Nav from './components/nav/Nav';
import Skills from './components/skills/Skills';
import SocialNetworks from './components/social-networks/SocialNetworks';
import WorkExperience from './components/work-experience/WorkExperience';

function App() {
  const modeTheme = useSelector((state) => state.modeslice.mode);
  return (
    <div className={modeTheme ? 'app ligth-mode' : 'app dark-mode'}>
      <Nav />
      <SocialNetworks />
      <div className="content">
        <main>
          <Great />
          <Aboutme />
          <WorkExperience />
          <Skills />
          <Courses />
          <GetInTouch />
        </main>
      </div>
    </div>
  )
}

export default App
