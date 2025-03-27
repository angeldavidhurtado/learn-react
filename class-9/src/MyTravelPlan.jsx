import { useOutletContext } from 'react-router-dom'
import './MyTravelPlan.css'

function MyTravelPlan() {
	const {a, b} = useOutletContext() || {a:'a', b:'b'}

	return (
		<div className="my-travel-plan">
			<h1>Lugares a visitar - Values: a:{a} b:{b}</h1>
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
			<p className="user-name">Usuario: {'Ángel'}</p>
		</div>
	)
}

export default MyTravelPlan
