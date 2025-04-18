import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function LayoutWithNav() {
	const contextValue = {a:1, b:2}

	return (
		<>
			<Nav />
			<Outlet context={contextValue} />
		</>
	)
}

export default LayoutWithNav
