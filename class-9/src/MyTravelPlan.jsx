import { useContext } from 'react'
import { AuthContext } from './App'
import './MyTravelPlan.css'

function MyTravelPlan() {
	const { user, plansToBuy } = useContext(AuthContext)
	const places = plansToBuy.state.placesBuy

	return (
		<div className="my-travel-plan">
			<h1>Lugares a visitar</h1>
			<ul>
				{places.length ?
				places.map(place =>
					<li key={place.name}>
						<p>{place.name} (${place.cost})</p>
						<button onClick={
							()=>plansToBuy.dispatch({
								type: plansToBuy.type.delete,
								payload:{ placeName: place.name }
							})
						}>Anular</button>
					</li>
				)
				: <li><p>No has seleccionado lugares</p></li>
				}
			</ul>
			<p className="cost">Precio total: ${plansToBuy.state.total}</p>
			<p className="user-name">Usuario: {user}</p>
		</div>
	)
}

export default MyTravelPlan
