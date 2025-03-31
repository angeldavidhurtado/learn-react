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

	return (
		<div className="site-detail">
			<h1>{place.name}</h1>
			<p>{place.activity}</p>
			<div className="picture">
				<span>${place.cost}</span>
				<div className="buttons">
					<button onClick={() => plansToBuy.dispatch({
						type: plansToBuy.type.add, payload: { placeName:place.name, placeCost:place.cost }
					})}>Comprar</button>
					<button>Anular</button>
					<button className="back" onClick={()=>navigate(`/area/${place.area}`)}>Volver</button>
				</div>
				<img src={`/img/${place.img}`} alt="" />
			</div>
		</div>
	)
}

export default SiteDetail
