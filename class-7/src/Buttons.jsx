import Context from './Context/Context'
import { useContext, useState } from 'react'
import Teacher from './Teacher'
import Address from './Address'
import './Buttons.css'

function Buttons() {
	const {data} = useContext(Context)
	const iLang = data[3].language
	const lang = data[iLang]

	const COMPONENTS = {
		teacher: <Teacher />,
		address: <Address />
	}
	const [componentToShow, setComponentToShow] = useState('teacher')

	return (
		<div className="buttons">
			<button onClick={() => setComponentToShow('teacher')}>{lang.button1}</button>
			<button onClick={() => setComponentToShow('address')}>{lang.button2}</button>
			{COMPONENTS[componentToShow]}
		</div>
	)
}

export default Buttons
