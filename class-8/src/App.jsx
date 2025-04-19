/*
 * utilizo HashRouter en lugar de BrowserRouter
 * ya que al deplegar en GitHub pages un Monorepo multipaquete
 * BrowserRouter redirige a / de todo mi GitHub pages, en cambio
 * HashRouter me permite trabajar cada proyecto en particular
 */

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import King from './King'
import './App.css'

function App() {
  return (
    <HashRouter>
      <Nav />
      <div className="margin-top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/king/:kingName" element={<King />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
