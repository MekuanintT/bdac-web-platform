import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'
import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG } from './config/emailConfig'

// Initialize EmailJS with Public Key
emailjs.init(EMAIL_CONFIG.PUBLIC_KEY)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
