import formQuestions from './../../data/formQuestions'
import dataFormContext from './../../context/dataFormContext'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import FormSummary from './../../components/form-summary/FormSummary'
import './FormQuestions.css'

function FormQuestions() {
	const {
		stateIndexQuestionForm,
		stateFormAnswers
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
		stateFormAnswers.set([...stateFormAnswers.value, value])
		stateIndexQuestionForm.set(iQuestion + 1)
		reset()
		setFocus('value')
	}

	const navigate = useNavigate()
	const goToHome = () => {
		stateIndexQuestionForm.set(0)
		stateFormAnswers.set([])
		navigate('/')
	}

	const print = () => {
		window.print()
	}

	return (
		<div className="form-questions">
			<section className="questions">
				{
					iQuestion == formQuestions.length
					?
					<div className="end">
						<p>¿Quieres modificar los datos o finalizar e imprimir tu pedido?</p>
						<div className="options">
							<button onClick={goToHome}>Volver</button>
							<button onClick={print}>Imprimir</button>
						</div>
					</div>
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
							watch('value') &&
							<p className="watch">
								{`${watch('value')} ${question.watchMessage}`}
							</p>
						}
						{
							errors.value?.type == 'required' &&
							<p>Por favor completa el campo</p>
						}
						{
							errors.value?.type == 'min' &&
							<p>Mínimo {question.min}</p>
						}
						{
							errors.value?.type == 'max' &&
							<p>Máximo {question.max}</p>
						}
					</form>
				}
			</section>
			<FormSummary />
		</div>
	)
}

export default FormQuestions
