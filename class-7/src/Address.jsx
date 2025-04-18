import Context from './Context/Context'
import { useContext } from 'react'
import './Address.css'

function Address() {
	const {data} = useContext(Context)
	const iLang = data[3].language
	const lang = data[iLang]

	return (
		<div className="address">
			<h2>{lang.button2}</h2>
			<p>{lang.address}</p>
		</div>
	)
}

export default Address
