import { useState } from 'react'
import Context from './Context'

const lenguages = [
	{
		title: 'Aprenda React intensivamente con una profesora nativa',
		text: '2 semanas. Una profesora sólo para ti (12h/día)',
		button1: 'Profesora',
		picture: 'marta.png',
		name: 'Marta Ríos',
		button2: 'Lugar',
		address: '48 St Laurent Boulevard, Montreal, Canadá'
	}, {
		title: 'Learn React intensively with a native teacher',
		text: '2 weeks. A teacher just for you (12h/day)',
		button1: 'Professor',
		name: 'Grace Trembley',
		picture: 'grace.png',
		button2: 'Lotacion',
		address: '65 Stonehaven, Ottawa, Canadá'
	}, {
		title: 'Apprenez React intensément avec un professeur natif',
		text: '2 semaines. Un professeur rien que pour vous (12h/jour)',
		button1: 'Professeur',
		name: 'Aimée Mathieu',
		picture: 'aimee.png',
		button2: 'Emplacement',
		address: '2700 Rue Jean-Perrin #190, Québec, Canadá'
	}, {
		language: 0
	}
]

const Provider = ({children}) => {
	const [data, setData] = useState(lenguages)

	return (
		<Context.Provider value={{data, setData}}>
			{children}
		</Context.Provider>
	)
}

export default Provider
