import { createContext, useState } from 'react'

export const context = createContext()

function Context({children}) {
	const [indexQuestionForm, setIndexQuestionForm] = useState(0)
	const stateIndexQuestionForm = {
		value: indexQuestionForm,
		set: setIndexQuestionForm
	}

	return (
		<context.Provider value={{
			stateIndexQuestionForm
		}}>
			{children}
		</context.Provider>
	)
}

export default Context
