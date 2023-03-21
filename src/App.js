import React from 'react'
import "./App.css"
import About from './Components/container/About/About'
import Contact from './Components/container/Contact/Contact'
import Footer from './Components/container/Footer/Footer'
import Home from './Components/container/Home/Home'
import Portfolio from './Components/container/Portfolio/Portfolio'
import Skills from './Components/container/Skills/Skills'
import Navbar from './Components/navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App