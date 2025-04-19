import Context from './Context/Context'
import { useContext, useEffect } from 'react'
import './Lenguage.css'
const baseURL = import.meta.env.BASE_URL

function Lenguage() {
	const {setData} = useContext(Context)

	const changeLenguage = lang => {
		const indexLang = {'es':0, 'en':1, 'fr':2}
		setData(d => {
			const newData = [...d]
			newData[3].language = indexLang[lang]
			return newData
		})
	}

	return (
		<div className="Lenguage">
			<button onClick={() => changeLenguage('es')}>
				<img src={`${baseURL}/img/spain.jpg`} alt="" />
			</button>
			<button onClick={() => {changeLenguage('en')}}>
				<img src={`${baseURL}/img/uk.png`} alt="" />
			</button>
			<button onClick={() => {changeLenguage('fr')}}>
				<img src={`${baseURL}/img/francia.png`} alt="" />
			</button>
		</div>
	)
}

export default Lenguage
