import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './components/Homepage.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'

import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
    <About />
    <Services />
    <Location />
    <Footer />
  </StrictMode>
)
