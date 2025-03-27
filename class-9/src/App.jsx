import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Router2 from './Router2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Router2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
