import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Content from './Content'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/content" replace={true} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
