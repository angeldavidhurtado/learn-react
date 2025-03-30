import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './App'
import './Nav.css'

function Nav() {
	const { logout } = useContext(AuthContext)

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
			<button onClick={()=>logout}>Logout</button>
		</nav>
	)
}

export default Nav
