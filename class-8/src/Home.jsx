import { Link } from 'react-router-dom'
import './Home.css'
const baseURL = import.meta.env.BASE_URL

function Home() {
	const kings = ['Atanagildo', 'Ervigio', 'Sisebuto', 'Ataulfo', 'Leogivildo', 'Recesvinto']

	return (
		<div className="homeKings">
			{kings.map(king => {
				const kingLower = king.toLowerCase()
				return (
					<Link key={kingLower} to={`/king/${kingLower}`}>
						<img
							src={`${baseURL}/kings/rey_${kingLower}.png`}
							alt={king}
						/>
					</Link>
				)
			})}
		</div>
	)
}

export default Home
