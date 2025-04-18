import KingCounter from './KingCounter'
import './Activity4.css'

function Activity4({kings}) {
	const component = kings
	.filter(king => king.reign>10 && king.eatenCows>10)
	.map(king => <KingCounter key={king.name} king={king} />)

	return (
		<div className="Activity4">
			<h2>Actividad 4</h2>
			{component}
		</div>
	)
}

export default Activity4
