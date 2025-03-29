import { useContext } from 'react'
import { AuthContext } from './App'
import './MyTravelPlan.css'

function MyTravelPlan() {
	const { user } = useContext(AuthContext)

	return (
		<div className="my-travel-plan">
			<h1>Lugares a visitar</h1>
			<ul>
				<li>
					<p>{'Nombre lugar'} (${20})</p>
					<button>Anular</button>
				</li>
				<li>
					<p>{'Nombre lugar'} (${20})</p>
					<button>Anular</button>
				</li>
				<li>
					<p>{'Nombre lugar'} (${20})</p>
					<button>Anular</button>
				</li>
			</ul>
			<p className="cost">Precio total: ${300}</p>
			<p className="user-name">Usuario: {user}</p>
		</div>
	)
}

export default MyTravelPlan
