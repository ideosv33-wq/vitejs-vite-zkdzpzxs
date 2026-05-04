
// para usar react en html debo importarlo, no viene solo, aca traigo react y unas cosas para controlar errores, tambien llamo a la entrada principal app

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// aca se inyecta efectivamente 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
