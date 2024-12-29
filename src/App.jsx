// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"
import Feature from "./components/Feature.jsx"
import ContactForm from "./components/ContactForm.jsx"
//import Button from "./components/Button.jsx"
import DogApi from "./components/DogApi.jsx"
import Theme from "./components/Theme.jsx"

function App() {
  

  return (
    <>
    <Theme/>
    <Navbar/> 
    <Hero/>
  
   <DogApi/>
    
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
