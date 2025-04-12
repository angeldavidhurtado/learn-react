import formQuestions from './../../data/formQuestions'
import dataFormContext from './../../context/dataFormContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

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
		stateIndexQuestionForm.set(iQuestion + 1)
		formAnswers.push(data.value)
		setFocus('value')
		reset()
		console.log(formAnswers)
	}

	return (
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
	)
}

export default FormQuestions
