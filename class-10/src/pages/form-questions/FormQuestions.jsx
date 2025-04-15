import formQuestions from './../../data/formQuestions'
import dataFormContext from './../../context/dataFormContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import FormSummary from './../../components/form-summary/FormSummary'

function FormQuestions() {
	const {
		stateIndexQuestionForm,
		formAnswers
	} = useContext(dataFormContext)

	const iQuestion = stateIndexQuestionForm.value
	if (iQuestion < 3) return <Navigate to="/" replace />

	const question = formQuestions[iQuestion]

	const {
		register,
		handleSubmit,
		formState: { errors },
		setFocus,
		reset,
		watch
	} = useForm()

	const validateForm = data => {
		const value = question.type == 'number' ? Number(data.value) : data.value
		formAnswers.push(value)
		stateIndexQuestionForm.set(iQuestion + 1)
		reset()
		setFocus('value')
	}

	return (
		<>
			{
				iQuestion == formQuestions.length
				?
				<div>Final</div>
				:
				<form onSubmit={handleSubmit(validateForm)}>
					<p>{question.question}</p>
					<input
						type={question.type}
						{...register('value', {
							required: question.required,
							min: question.min,
							max: question.max
						})}
						autoFocus
						autoComplete="off"
					/>
					<input type="submit" />
					{
						errors.value?.type == 'required' &&
						<p>Por favor completa el campo</p>
					}
					{
						errors.value?.type == 'min' &&
						<p>Debe ser un número mayor</p>
					}
					{
						errors.value?.type == 'max' &&
						<p>Debe ser un número menor</p>
					}
				</form>
			}
			<FormSummary />
		</>
	)
}

export default FormQuestions
