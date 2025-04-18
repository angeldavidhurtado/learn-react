import { Routes, Route, Navigate } from 'react-router-dom'
import { createContext, useEffect, useState, useReducer } from 'react'
import plansToBuyStateAndReducer from './plansToBuyStateAndReducer'
import LayoutWithNav from './LayoutWithNav'
import Login from './Login'
import Places from './Places'
import SiteDetail from './SiteDetail'
import MyTravelPlan from './MyTravelPlan'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

export const AuthContext = createContext()
export const r = Math.random() // importo este valor en Login.jsx
console.log(`random App: ${r}`)

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const userName = localStorage.getItem('userName')
    setUser(userName)
  }, [])
  const login = userName => {
    userName = userName.replace(/\s+/g, ' ').trim()
    if (!userName) return false
    localStorage.setItem('userName', userName)
    setUser(userName)
    return true
  }
  const logout = () => {
    localStorage.removeItem('userName')
    setUser(null)
  }
  const getUser = () => {
    const userName = localStorage.getItem('userName')
    return userName
  }

  // useReducer de plansToBuy
  const [statePlansToBuy, dispatchPlansToBuy] = useReducer(
    plansToBuyStateAndReducer.reducerPlansToBuy,
    plansToBuyStateAndReducer.initialStatePlnasToBuy
  )
  const plansToBuy = {
    state:statePlansToBuy,
    type:plansToBuyStateAndReducer.type,
    dispatch:dispatchPlansToBuy
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        getUser,
        plansToBuy
      }}
    >
      <Routes>

        <Route element={<PublicRoutes />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Navigate to="/" replace />} />
        </Route>

        // Si la app crece se podrian combinar PrivateRoutes
        // y LayoutWithNav en uno solo por ejemplo
        // PrivateRoutesWithNav o similar
        <Route element={<PrivateRoutes />}>
          <Route element={<LayoutWithNav />}>
            <Route path="/area/:area" element={<Places />} />
            <Route path="/site/:name" element={<SiteDetail />} />
            <Route path="/plan" element={<MyTravelPlan />} />
          </Route>
        </Route>
      </Routes>
    </AuthContext.Provider>
  )
}

export default App
