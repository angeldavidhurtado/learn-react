import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LayoutWithNav from './LayoutWithNav'
import Login from './Login'
import Places from './Places'
import SiteDetail from './SiteDetail'
import MyTravelPlan from './MyTravelPlan'
import { createContext, useState } from 'react'

export const AuthContext = createContext()
export const r = Math.random() // importo este valor en Login.jsx
console.log(`random App: ${r}`)
console.log('-----------------------')
console.log(AuthContext)

function App() {
  const [user, setUser] = useState(null)
  const login = userName => setUser(userName)
  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Navigate to="/" replace />} />

          <Route element={<LayoutWithNav />}>
            <Route path="/area/:area" element={<Places />} />
            <Route path="/site" element={<SiteDetail />} />
            <Route path="/plan" element={<MyTravelPlan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
