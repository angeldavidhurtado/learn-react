import dataTouristPlaces from './dataTouristPlaces'
import { useParams } from 'react-router-dom'
import './Places.css'

function Places() {
	const { area } = useParams()

	return (
		<div className="places">
			{dataTouristPlaces
			.filter(place => place.area == area)
			.map(place =>
				<div key={place.name}>
					<img src={`/img/${place.img}`} alt={place.name} />
					<h2>{place.name}</h2>
					<p>{place.location}</p>
					<a href="">Ver</a>
				</div>
			)}
		</div>
	)
}

export default Places
