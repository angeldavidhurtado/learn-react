import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './App'

function PrivateRoutes() {
	const { getUser } = useContext(AuthContext)
	const user = getUser()
	if (user) return <Outlet />
	return <Navigate to="/" replace />
}

export default PrivateRoutes
