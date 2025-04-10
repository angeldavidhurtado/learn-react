import dataFormContext from './dataFormContext'
import { useState } from 'react'

const formAnswers = []

function DataFormProvider({ children }) {
	const [indexQuestionForm, setIndexQuestionForm] = useState(0)
	const stateIndexQuestionForm = {
		value: indexQuestionForm,
		set: setIndexQuestionForm
	}

	return (
		<dataFormContext.Provider value={{
			stateIndexQuestionForm,
			formAnswers
		}}>
			{children}
		</dataFormContext.Provider>
	)
}

export default DataFormProvider
