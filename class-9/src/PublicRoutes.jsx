import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './App'

function PublicRoutes() {
	const { getUser } = useContext(AuthContext)
	const user = getUser()
	if (user) return <Navigate to="/area/cp" replace />
	return <Outlet />
}

export default PublicRoutes
