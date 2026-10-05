import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalErrorHandler from './ErrorBoundary.jsx'
import { GlobalContextProvider } from './GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalErrorHandler>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </GlobalErrorHandler>
  </StrictMode>,
)
