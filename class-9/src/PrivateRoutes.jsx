import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './App'

function PrivateRoutes() {
	const { user } = useContext(AuthContext)
	if (!user) return <Navigate to="/" replace />
	return <Outlet />
}

export default PrivateRoutes
