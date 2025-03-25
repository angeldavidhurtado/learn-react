import dataTouristPlaces from './dataTouristPlaces'
import './Places.css'

function Places() {
	return (
		<div className="places">
			{dataTouristPlaces.map(place =>
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
