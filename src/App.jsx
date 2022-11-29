import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import Aboutme from './components/Aboutme'
import Education from './components/Education'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import Great from './components/Great'
import Nav from './components/nav/Nav'
import SocialNetworks from './components/SocialNetworks'
import WorkExperience from './components/WorkExperience'

function App() {
  const modeTheme = useSelector((state) => state.modeslice.mode);
  return (
    <main className={modeTheme ? 'ligth-mode' : 'dark-mode'}>
      <Nav />
      <SocialNetworks />
      <Great />
      <Aboutme />
      <WorkExperience />
      <Education />
      <GetInTouch />
      <Footer />
    </main>
  )
}

export default App
