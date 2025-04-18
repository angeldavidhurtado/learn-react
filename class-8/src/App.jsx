import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import King from './King'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="margin-top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/king/:kingName" element={<King />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
