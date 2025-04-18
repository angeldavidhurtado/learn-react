import './Activity2.css'

function Activity2({kings}) {
	const hiddenKing = e => {
		const btn = e.target
		const component = btn.parentElement
		component.style.display = 'none'
	}

	const component = kings
	.filter(king => !king.name.includes('g'))
	.map(king =>
		<div key={king.name} className="king">
			<h3>{king.name}</h3>
			<button onClick={hiddenKing}>Borrar</button>
		</div>
	)

	return (
		<div className="Activity2">
			<h2>Actividad 2</h2>
			{component}
		</div>
	)
}

export default Activity2
