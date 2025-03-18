import Context from './Context/Context'
import { useContext, useState } from 'react'
import Teacher from './Teacher'
import Address from './Address'
import './Buttons.css'

function Buttons() {
	const {data} = useContext(Context)
	const iLang = data[3].language
	const lang = data[iLang]
	const [componentToShow, setComponentToShow] = useState(1)

	return (
		<div className="buttons">
			<button onClick={() => setComponentToShow(1)}>{lang.button1}</button>
			<button onClick={() => setComponentToShow(2)}>{lang.button2}</button>
			{
				componentToShow == 1
				? <Teacher />
				: <Address />
			}
		</div>
	)
}

export default Buttons
