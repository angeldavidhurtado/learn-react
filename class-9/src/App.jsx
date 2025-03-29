import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'
import LayoutWithNav from './LayoutWithNav'
import Login from './Login'
import Places from './Places'
import SiteDetail from './SiteDetail'
import MyTravelPlan from './MyTravelPlan'

export const AuthContext = createContext()
export const r = Math.random() // importo este valor en Login.jsx
console.log(`random App: ${r}`)

function App() {
  const [user, setUser] = useState(null)
  const login = userName => setUser(userName)
  const logout = () => setUser(null)
  const navigate = useNavigate()
  let isUserLoggedIn = () => {}
  useEffect(() => {
    isUserLoggedIn = () => { console.log(`--- ${user}`); if (!user) navigate('/') }
  })

  return (
    <AuthContext.Provider value={{ user, login, logout, isUserLoggedIn }}>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Navigate to="/" replace />} />

        <Route element={<LayoutWithNav />}>
          <Route path="/area/:area" element={<Places />} />
          <Route path="/site" element={<SiteDetail />} />
          <Route path="/plan" element={<MyTravelPlan />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
