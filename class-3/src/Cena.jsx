import './Cena.css'

function Cena({ name="Anonymous", price=0, action=()=>{}, color }) {
	const runAction = e => {
		const divCena = e.target.parentElement
		divCena.style.display = 'none'
		action(total=>total+price)
	}

	const quitarAcentos = txt => txt.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

	return (
		<div className="Cena" style={{background: color}}>
			<h2>Rey {name}</h2>
			<img src={`/reyes/rey_${quitarAcentos(name.toLowerCase())}.png`} alt={`Rey ${name}`} />
			<p>Precio: <span>{price}</span></p>
			<button onClick={runAction}>Comprar</button>
		</div>
	)
}

export default Cena
