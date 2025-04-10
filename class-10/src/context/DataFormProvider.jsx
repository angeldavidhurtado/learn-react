import DataFormContext from './data-form-context'
import { useState } from 'react'

function DataFormProvider({ children }) {
	const [indexQuestionForm, setIndexQuestionForm] = useState(0)
	const stateIndexQuestionForm = {
		value: indexQuestionForm,
		set: setIndexQuestionForm
	}

	return (
		<DataFormContext.Provider value={{
			stateIndexQuestionForm
		}}>
			{children}
		</DataFormContext.Provider>
	)
}

export default DataFormProvider
