import { Outlet } from 'react-router-dom'
import Nav from '@/components/nav/Nav'

function Layout() {
	return (
		<>
			<Nav />
			<main style={{padding: '20px'}}>
				<Outlet></Outlet>
			</main>
		</>
	)
}

export default Layout
