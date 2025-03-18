import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProfilePicContextProvider from './contexts/ProfilePicContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfilePicContextProvider>

    <App />
    </ProfilePicContextProvider>
  </StrictMode>,
)
