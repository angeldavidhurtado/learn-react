import Context from './Context/Context'
import { useContext } from 'react'
import './Teacher.css'
const baseURL = import.meta.env.BASE_URL

function Teacher() {
	const {data} = useContext(Context)
	const iLang = data[3].language
	const lang = data[iLang]

	return (
		<div className="teacher">
			<h2>{lang.button1}</h2>
			<img src={`${baseURL}/img/${lang.picture}`} alt={lang.name} />
			<span>{lang.name}</span>
		</div>
	)
}

export default Teacher
