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
				<div key={iAnswer}>
					{answer} {iAnswer}
				</div>
			)}
		</>
	)
}

export default FormSummary
