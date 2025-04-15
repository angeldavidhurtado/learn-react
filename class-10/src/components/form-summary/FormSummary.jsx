import dataFormContext from './../../context/dataFormContext'
import { useContext } from 'react'

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

	return (
		<>
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
		</>
	)
}

export default FormSummary
