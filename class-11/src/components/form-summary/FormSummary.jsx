import dataFormContext from '@/context/dataFormContext'
import { useContext } from 'react'
import './FormSummary.css'
const baseUrl = import.meta.env.BASE_URL

function FormSummary() {
	const fields = [
		'Imagen',
		'Zona',
		'$ por día',
		'Nombre',
		'Habitaciones',
		'Personas',
		'Días'
	]
	const { stateFormAnswers } = useContext(dataFormContext)

	let total = stateFormAnswers.value[2]
	if (stateFormAnswers.value.length > 4)
		for (let i = 4; i < stateFormAnswers.value.length; i++)
			total *= stateFormAnswers.value[i]

	return (
		<div className="form-summary">
			{stateFormAnswers.value.map((answer, iAnswer) =>
				iAnswer == 0
				?
				<div key={iAnswer}>
					<img src={`${baseUrl}/img/${answer}`} alt="" />
				</div>
				:
				<div key={iAnswer}>
					<p>{fields[iAnswer]}</p>
					<p>{answer}</p>
				</div>
			)}
			<div className="total">
				<h3>Total</h3>
				<span>{total}</span>
			</div>
		</div>
	)
}

export default FormSummary
