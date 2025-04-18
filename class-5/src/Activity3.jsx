import { useState } from 'react'
import './Activity3.css'

function Activity3({kings}) {
	const [kingName, setKingName] = useState('No se ha encontrado')
	const [inputValue, setInputValue] = useState('')

	const search = e => {
		let letter = e.target.value

		if (!letter) {
			setInputValue(letter)
			setKingName('No se ha encontrado')
			return
		}

		letter = letter.at(-1).toUpperCase()
		setInputValue(letter)

		const king = kings.find(king => king.name[0] == letter)
		setKingName(king ? king.name : 'No se ha encontrado')
	}

	return (
		<div className="Activity3">
			<h2>Actividad 3</h2>
			<p>{kingName}</p>
			<input type="text" value={inputValue} onChange={search} placeholder='Buscar' />
		</div>
	)
}

export default Activity3
