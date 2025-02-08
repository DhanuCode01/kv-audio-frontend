import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Position from './2nd day/Position.jsx'
import Alingment from './2nd day/Alingment.jsx'
import AdminPage from './2nd day/AdminPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminPage/>

    
  </StrictMode>,
)
