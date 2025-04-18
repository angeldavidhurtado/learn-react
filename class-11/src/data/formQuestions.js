const formQuestions = [
	{
		question: 'Selecciona un lugar a visitar'
	},
	{}, // the answer is taken from the answer to question 1
	{}, // the answer is taken from the answer to question 1
	{
		question: '¿Cual es tu nombre?',
		watchMessage: 'como nombre de usuario',
		required: true,
		type: 'text',
		min: null,
		max: null
	},
	{
		question: '¿Cuantas habitaciones quieres?',
		watchMessage: 'habitaciones',
		required: true,
		type: 'number',
		min: 1,
		max: 10
	},
	{
		question: '¿Cuantas personas son?',
		watchMessage: 'personas',
		requiered: true,
		type: 'number',
		min: 1,
		max: 7
	},
	{
		question: '¿Para cuantos días?',
		watchMessage: 'días',
		required: true,
		type: 'number',
		min: 1,
		max: 7
	},
]

export default formQuestions
