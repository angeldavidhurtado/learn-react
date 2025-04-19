import './Activity1.css'
const baseURL = import.meta.env.BASE_URL

function Activity1({kings}) {
	const quitarAcentos = txt => txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

	const component = kings.map( king =>
		<div key={king.name} className="king">
			<h3>{king.name.toUpperCase()}</h3>
			<img src={`${baseURL}/reyes/rey_${quitarAcentos(king.name.toLowerCase())}.png`} alt={`${king.name}`} />
			<p>Comió {king.eatenCows} vacas en sus {king.reign} años de reinado</p>
		</div>
	)

	return (
		<div className="Activity1">
			<h2>Actividad 1</h2>
			<div className="kings">
				{component}
			</div>
		</div>
	)
}

export default Activity1
