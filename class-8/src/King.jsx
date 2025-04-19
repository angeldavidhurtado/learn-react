import { useParams } from "react-router-dom"
import './King.css'
const baseURL = import.meta.env.BASE_URL

function King() {
	const {kingName} = useParams()
	const displayName = kingName[0].toUpperCase() + kingName.slice(1)

	return (
		<div className="king-name">
			<img src={`${baseURL}/kings/rey_${kingName}.png`} alt={displayName} />
			<h1>{displayName}</h1>
		</div>
	)
}

export default King
