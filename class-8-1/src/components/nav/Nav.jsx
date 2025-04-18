import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Inicio</NavLink>
				</li>
				<li>
					<NavLink to="/about">Acerca de</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
