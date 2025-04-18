import Context from './Context/Context'
import { useContext } from 'react'
import './Text.css'

function Text() {
	const {data} = useContext(Context)
	const iLang = data[3].language
	const lang = data[iLang]

	return (
		<div className="text">
			<h1>{lang.title}</h1>
			<p>{lang.text}</p>
		</div>
	)
}

export default Text
