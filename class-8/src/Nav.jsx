import { NavLink } from "react-router-dom"
import './Nav.css'

function Nav() {
	return (
		<nav>
			<NavLink to="/">Inicio</NavLink>
			<NavLink to="/king/atanagildo">Atanagildo</NavLink>
			<NavLink to="/king/ataulfo">Ataulfo</NavLink>
			<NavLink to="/king/ervigio">Ervigio</NavLink>
			<NavLink to="/king/leogivildo">Leogivildo</NavLink>
			<NavLink to="/king/recesvinto">Recesvinto</NavLink>
			<NavLink to="/king/sisebuto">Sisebuto</NavLink>
		</nav>
	)
}

export default Nav
