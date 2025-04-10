import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataFormProvider from './context/DataFormProvider'
import App from './App'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataFormProvider>
      <App />
    </DataFormProvider>
  </StrictMode>,
)
