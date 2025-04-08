import dataPlaces from './dataPlaces'
import { useForm } from 'react-hook-form'
import './Place.css'

function Place() {
	console.log('--- --- --- ---')
	const j = useForm()
	console.log(j.formState.errors)

	return (
		<form>
			<div className="header">
				<p>Selecciona un lugar a visitar</p>
				<input type="submit" onClick={e=>{e.preventDefault(); console.log('hola')}} />
			</div>
			<div className="places">
				{dataPlaces.map(place =>
					<label className="place" key={place.name} htmlFor={place.name}>
						<input type="radio" name="places" value={place.name} id={place.name} />
						<h2>{place.name}</h2>
						<span className="cost">${place.cost}</span>
						<img src={`/img/${place.img}`} alt={place.name} />
					</label>
				)}
			</div>
		</form>
	)
}

export default Place
