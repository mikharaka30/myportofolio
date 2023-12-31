import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  )
}

export default App