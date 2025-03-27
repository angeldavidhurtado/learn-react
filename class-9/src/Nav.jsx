import { Link } from 'react-router-dom'
import './Nav.css'

function Nav({ setRutaDeseada }) {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/area/cp">Capital y Patagonia</Link>
				</li>
				<li>
					<Link to="/area/no">Norte y Este</Link>
				</li>
				<li>
					<Link to="/plan">Mi plan de viaje</Link>
				</li>
			</ul>
			<button
				onClick={()=>{
					setRutaDeseada(data => !data)
				}}
			>Logout</button>
		</nav>
	)
}

export default Nav
