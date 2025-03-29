import { Routes, Route, Navigate } from 'react-router-dom'
import { createContext, useState } from 'react'
import LayoutWithNav from './LayoutWithNav'
import Login from './Login'
import Places from './Places'
import SiteDetail from './SiteDetail'
import MyTravelPlan from './MyTravelPlan'
import PrivateRoutes from './PrivateRoutes'

export const AuthContext = createContext()
export const r = Math.random() // importo este valor en Login.jsx
console.log(`random App: ${r}`)

function App() {
  const [user, setUser] = useState(null)
  const login = userName => setUser(userName)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Navigate to="/" replace />} />

        // Si la app crece se podrian combinar PrivateRoutes y LayoutWithNav en uno solo por ejemplo PrivateRoutesWithNav o similar
        <Route element={<PrivateRoutes />}>
          <Route element={<LayoutWithNav />}>
            <Route path="/area/:area" element={<Places />} />
            <Route path="/site" element={<SiteDetail />} />
            <Route path="/plan" element={<MyTravelPlan />} />
          </Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
