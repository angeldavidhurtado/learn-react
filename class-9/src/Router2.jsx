import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Places from './Places'
import SiteDetail from './SiteDetail'
import MyTravelPlan from './MyTravelPlan'

function Router2() {
	const [rutaDeseada, setRutaDeseada] = useState(true)

	return (
		<>
			<Nav setRutaDeseada={setRutaDeseada} />
			<Routes>
				{
					rutaDeseada
					? <Route path="/plan" element={<MyTravelPlan />} />
					: <></>
				}
				<Route path="/area/:area" element={<Places />} />
				<Route path="/site" element={<SiteDetail />} />
			</Routes>
		</>
	)
}

export default Router2
