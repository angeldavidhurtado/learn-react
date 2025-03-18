import Context from './Context/Context'
import { useContext, useEffect } from 'react'
import './Lenguage.css'

function Lenguage() {
	const {setData} = useContext(Context)

	const changeLenguage = lang => {
		const indexLang = {'es':0, 'en':1, 'fr':2}
		setData(d => {
			d[3].language = indexLang[lang]
			console.log(d)
			return d
		})
	}

	return (
		<div className="Lenguage">
			<button onClick={() => changeLenguage('es')}>
				<img src="/img/spain.jpg" alt="" />
			</button>
			<button onClick={() => {changeLenguage('en')}}>
				<img src="/img/uk.png" alt="" />
			</button>
			<button onClick={() => {changeLenguage('fr')}}>
				<img src="/img/francia.png" alt="" />
			</button>
		</div>
	)
}

export default Lenguage
