import { Navigate } from 'react-router-dom'
import Layout from './Layout'
import Home from '@/pages/home/Home'
import About from '@/pages/about/About'
import NotFound from '@/pages/not-found/NotFound'

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'about', element: <About /> }
		]
	},
	{ path: 'not-found', element: <NotFound /> },
	{ path: '*', element: <Navigate to="/not-found" replace /> }
]

export default routes
