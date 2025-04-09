const formQuestions = [
	{
		question: 'Selecciona un lugar a visitar'
	},
	{
		question: '¿Cual es tu nombre?',
		watchMessage: 'como nombre de usuario',
		required: true,
		min: null,
		max: null
	},
	{
		question: '¿Cuantas habitaciones quieres?',
		watchMessage: 'habitaciones',
		required: true,
		min: 1,
		max: 10
	},
	{
		question: '¿Cuantas personas son?',
		watchMessage: 'personas',
		requiered: true,
		min: 1,
		max: 7
	},
	{
		question: '¿Para cuantos días?',
		watchMessage: 'días',
		required: true,
		min: 1,
		max: 7
	},
]

export default formQuestions
