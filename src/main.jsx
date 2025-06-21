import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Defer Buffer polyfill to reduce initial bundle size
const loadBufferPolyfill = async () => {
  const { Buffer } = await import('buffer')
  window.Buffer = Buffer
}

// Load polyfill after initial render
loadBufferPolyfill()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
