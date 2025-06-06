import { useContext } from 'react'
import { AuthContext } from './App'
import dataTouristPlaces from './dataTouristPlaces'
import { useParams, Link } from 'react-router-dom'
import './Places.css'
const baseUrl = import.meta.env.BASE_URL

function Places() {
	const { area } = useParams()
	const { plansToBuy } = useContext(AuthContext)

	return (
		<div className="places">
			{dataTouristPlaces
			.filter(place => place.area == area)
			.map(place => {
				const isInTripPlan = plansToBuy.state.placesBuy.some(iPlace => iPlace.name == place.name)
				return (
					<div key={place.name} className="place">
						<img src={`${baseUrl}/img/${place.img}`} alt={place.name} />
						<div className="content">
							<h2>{place.name}</h2>
							<p>{place.location}</p>
							<Link to={`/site/${place.name}`}>Ver</Link>
							{ isInTripPlan ? <div className="green"></div> : null }
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Places
