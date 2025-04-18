import dataFormContext from './dataFormContext'
import { useState } from 'react'

function DataFormProvider({ children }) {
	const [indexQuestionForm, setIndexQuestionForm] = useState(0)
	const [formAnswers, setFormAnswers] = useState([])
	const stateIndexQuestionForm = {
		value: indexQuestionForm,
		set: setIndexQuestionForm
	}
	const stateFormAnswers = {
		value: formAnswers,
		set: setFormAnswers
	}

	return (
		<dataFormContext.Provider value={{
			stateIndexQuestionForm,
			stateFormAnswers
		}}>
			{children}
		</dataFormContext.Provider>
	)
}

export default DataFormProvider
