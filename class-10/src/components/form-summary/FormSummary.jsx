import dataFormContext from './../../context/dataFormContext'
import { useContext } from 'react'
import './FormSummary.css'

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
	const { formAnswers } = useContext(dataFormContext)

	let total = formAnswers[2]
	if (formAnswers.length > 4)
		for (let i = 4; i < formAnswers.length; i++)
			total *= formAnswers[i]

	return (
		<div className="form-summary">
			{formAnswers.map((answer, iAnswer) =>
				iAnswer == 0
				?
				<div key={iAnswer}>
					<img src={`/img/${answer}`} alt="" />
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
