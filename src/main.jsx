import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Generate from './Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Generate />
  </StrictMode>,
)
