import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Content from './Content'
import './App.css'
const baseUrl = import.meta.env.BASE_URL

function App() {
  return (
    <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route path="/" element={<Navigate to="/content" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
