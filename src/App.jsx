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
  return (
    <>
      <Nav />
      <SocialNetworks />
      <Great />
      <Aboutme />
      <WorkExperience />
      <Education />
      <GetInTouch />
      <Footer />
    </>
  )
}

export default App
