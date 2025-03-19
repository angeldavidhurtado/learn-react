import { useParams } from "react-router-dom"

function King() {
	const {kingName} = useParams()
	const displayName = kingName[0].toUpperCase() + kingName.slice(1)

	return (
		<div className="kingName">
			<img src={`/kings/rey_${kingName}.png`} alt={displayName} />
			<h1>{displayName}</h1>
		</div>
	)
}

export default King
