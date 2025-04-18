import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './App'
import dataTouristPlaces from './dataTouristPlaces'
import './SiteDetail.css'

function SiteDetail() {
	const { name } = useParams()
	const place = dataTouristPlaces.find(place => place.name == name)
	const navigate = useNavigate()
	const { plansToBuy } = useContext(AuthContext)
	const isInTripPlan = plansToBuy.state.placesBuy.some(iPlace => iPlace.name == place.name)

	const switchAddDelete = () => {
		const action = isInTripPlan
			? { type: plansToBuy.type.delete, payload: { placeName: place.name } }
			: { type: plansToBuy.type.add, payload: { placeName: place.name, placeCost: place.cost } }
		plansToBuy.dispatch(action)
	}

	return (
		<div className="site-detail">
			<h1>{place.name}</h1>
			<p>{place.activity}</p>
			<div className="picture">
				<span>${place.cost}</span>
				<div className="buttons">
					<button onClick={switchAddDelete}>
						{ isInTripPlan ? 'Anular' : 'Comprar' }
					</button>
					<button className="back" onClick={()=>navigate(`/area/${place.area}`)}>Volver</button>
				</div>
				<img src={`/img/${place.img}`} alt="" />
			</div>
		</div>
	)
}

export default SiteDetail
