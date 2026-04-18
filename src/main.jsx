import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#171717',
          color: '#F0EDE8',
          border: '1px solid #2E2E2E',
        },
      }} />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
