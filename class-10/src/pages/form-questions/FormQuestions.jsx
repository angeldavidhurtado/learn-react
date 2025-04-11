import formQuestions from './../../data/formQuestions'
import dataFormContext from './../../context/dataFormContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

function FormQuestions() {
	const {
		stateIndexQuestionForm,
		formAnswers
	} = useContext(dataFormContext)

	const iQuestion = stateIndexQuestionForm.value
	if (iQuestion < 3) return <Navigate to="/" replace />

	const question = formQuestions[iQuestion].question

	return (
		<p>
			{question}
		</p>
	)
}

export default FormQuestions
