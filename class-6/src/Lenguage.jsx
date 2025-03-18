import './Lenguage.css'

function Lenguage() {
	const changeLenguage = lang => {
		console.log(lang)
	}

	return (
		<div className="Lenguage">
			<button onClick={() => changeLenguage('es')}>
				<img src="/img/spain.jpg" alt="" />
			</button>
			<button onClick={() => {changeLenguage('en')}}>
				<img src="/img/uk.png" alt="" />
			</button>
			<button onClick={() => {changeLenguage('fr')}}>
				<img src="/img/francia.png" alt="" />
			</button>
		</div>
	)
}

export default Lenguage
