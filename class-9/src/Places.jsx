import { useContext } from 'react'
import { AuthContext } from './App'
import dataTouristPlaces from './dataTouristPlaces'
import { useParams, Link } from 'react-router-dom'
import './Places.css'

function Places() {
	const { area } = useParams()
	const { PlansToBuy } = useContext(AuthContext)
	console.log(PlansToBuy.state)

	return (
		<div className="places">
			{dataTouristPlaces
			.filter(place => place.area == area)
			.map(place =>
				<div key={place.name}>
					<img src={`/img/${place.img}`} alt={place.name} />
					<h2>{place.name}</h2>
					<p>{place.location}</p>
					<Link to={`/site/${place.name}`}>Ver</Link>
				</div>
			)}
		</div>
	)
}

export default Places
