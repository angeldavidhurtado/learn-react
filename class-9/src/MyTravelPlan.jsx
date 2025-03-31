import { useContext } from 'react'
import { AuthContext } from './App'
import './MyTravelPlan.css'

function MyTravelPlan() {
	const { user, plansToBuy } = useContext(AuthContext)

	return (
		<div className="my-travel-plan">
			<h1>Lugares a visitar</h1>
			<ul>
				{plansToBuy.state.placesBuy.map(place =>
					<li key={place.name}>
						<p>{place.name} (${place.cost})</p>
						<button onClick={
							()=>plansToBuy.dispatch({
								type: plansToBuy.type.delete,
								payload:{ placeName: place.name }
							})
						}>Anular</button>
					</li>
				)}
			</ul>
			<p className="cost">Precio total: ${plansToBuy.state.total}</p>
			<p className="user-name">Usuario: {user}</p>
		</div>
	)
}

export default MyTravelPlan
