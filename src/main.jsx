import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Position from './2nd day/Position.jsx'
import Alingment from './2nd day/Alingment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Alingment/>
    
  </StrictMode>,
)
