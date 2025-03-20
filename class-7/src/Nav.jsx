import { NavLink } from "react-router-dom"
import './Nav.css'

function Nav() {
	const active = ({isActive}) => isActive ? 'active' : null

	return (
		<nav>
			<NavLink className={active} to="/">Inicio</NavLink>
			<NavLink className={active} to="/king/atanagildo">Atanagildo</NavLink>
			<NavLink className={active} to="/king/ataulfo">Ataulfo</NavLink>
			<NavLink className={active} to="/king/ervigio">Ervigio</NavLink>
			<NavLink className={active} to="/king/leogivildo">Leogivildo</NavLink>
			<NavLink className={active} to="/king/recesvinto">Recesvinto</NavLink>
			<NavLink className={active} to="/king/sisebuto">Sisebuto</NavLink>
		</nav>
	)
}

export default Nav
