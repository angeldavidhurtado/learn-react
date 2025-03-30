import { useParams, useNavigate } from 'react-router-dom'
import dataTouristPlaces from './dataTouristPlaces'
import './SiteDetail.css'

function SiteDetail() {
	const { name } = useParams()
	const place = dataTouristPlaces.find(place => place.name == name)
	const navigate = useNavigate()

	return (
		<div className="site-detail">
			<h1>{place.name}</h1>
			<p>{place.activity}</p>
			<div className="picture">
				<span>${place.cost}</span>
				<div className="buttons">
					<button>Comprar</button>
					<button>Anular</button>
					<button className="back" onClick={()=>navigate(`/area/${place.area}`)}>Volver</button>
				</div>
				<img src={`/img/${place.img}`} alt="" />
			</div>
		</div>
	)
}

export default SiteDetail
