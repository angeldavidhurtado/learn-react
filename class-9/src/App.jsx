import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutWithNav from './LayoutWithNav'
import Login from './Login'
import Places from './Places'
import SiteDetail from './SiteDetail'
import MyTravelPlan from './MyTravelPlan'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<LayoutWithNav />}>
          <Route path="/area/:area" element={<Places />} />
          <Route path="/site" element={<SiteDetail />} />
          <Route path="/plan" element={<MyTravelPlan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
