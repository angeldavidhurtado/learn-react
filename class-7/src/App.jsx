import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import King from './King'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:kingName" element={<King />} />
        <Route path="/leovigildo" element={<Navigate to="/leogivildo" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
