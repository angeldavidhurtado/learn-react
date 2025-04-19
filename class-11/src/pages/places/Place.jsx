import dataFormContext from '@/context/dataFormContext'
import dataPlaces from '@/data/places'
import dataFormQuestions from '@/data/formQuestions'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Place.css'
const baseUrl = import.meta.env.BASE_URL

function Place() {
	const navigate = useNavigate()
	const { register, handleSubmit, formState: { errors } } = useForm()
	const {
		stateIndexQuestionForm,
		stateFormAnswers
	} = useContext(dataFormContext)

	const onSubmit = data => {
		const place = dataPlaces.find(place => place.name == data.placeName)
		stateFormAnswers.set([place.img, place.name, place.cost])
		stateIndexQuestionForm.set(3)
		navigate('/form')
	}

	const question = dataFormQuestions[stateIndexQuestionForm.value].question

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="header">
				<p>{question}</p>
				<input type="submit" />
			</div>
			{
				errors.placeName?.type == 'required'
				&&
				<p className="error">
					Selecciona una opción por favor
				</p>
			}
			<div className="places">
				{dataPlaces.map(place =>
					<label className="place" key={place.name} htmlFor={place.name}>
						<input
							type="radio"
							value={place.name}
							id={place.name}
							{...register('placeName', { required: true })}
						/>
						<h2>{place.name}</h2>
						<span className="cost">${place.cost}</span>
						<img src={`${baseUrl}/img/${place.img}`} alt={place.name} />
					</label>
				)}
			</div>
		</form>
	)
}

export default Place
