import { useEffect } from 'react'
import AOS from 'aos'
import './App.css'
import NavBar from './components/navBar/navBar'
import LandingPage from './components/landingPage/landingPage'
import Introduction from './components/introduction/introduction'
import Projects from './components/projects/projects'
import Blog from './components/blog/blog'
import Footer from './components/footer/footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])
  
  return (
    <>
      <NavBar />
      <LandingPage />
      <Introduction />
      <Projects />
      <Blog />
      <Footer />
    </>
  )
}

export default App
