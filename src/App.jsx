// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"
import Feature from "./components/Feature.jsx"
import ContactForm from "./components/ContactForm.jsx"
function App() {
  

  return (
    <>
    <Navbar/> 
    <Hero/>
    <Card/>
    <Feature/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App