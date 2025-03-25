import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Places from './Places'
import Login from './Login'
import SiteDetail from './SiteDetail'
import MyTravelPlan from './MyTravelPlan'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Places />} />
        <Route path="/login" element={<Login />} />
        <Route path="/site" element={<SiteDetail />} />
        <Route path="/plan" element={<MyTravelPlan />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
