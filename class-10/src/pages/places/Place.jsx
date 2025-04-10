import dataPlaces from '../../data/places'
import { useForm } from 'react-hook-form'
import './Place.css'

function Place() {
	console.log('--- --- --- ---')
	const { register, handleSubmit, formState: { errors } } = useForm()
	const onSubmit = data => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="header">
				<p>Selecciona un lugar a visitar</p>
				<input type="submit" />
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
