function MiComponente({nombre="Anonimo", edad=0}) {
	return (
		<div className="MiComponente">
			<h2>MiComponente</h2>
			<p>Me llamo {nombre} y tengo {edad} años</p>
		</div>
	)
}

export default MiComponente
