import { useEffect, useState } from "react"
import './joke.css'

function Joke() {
	const [jokeState, setJokeState] = useState('')

	const getJoke = () => {
		const urlApi = 'https://api.chucknorris.io/jokes/random?category=dev'
		fetch(urlApi)
		.then(res=>res.json())
		.then(data=>setJokeState(data.value))
		.catch(err=>console.log(err))
	}

	useEffect(getJoke, [])

	return (
		<>
		<h2>Ejercicio 1</h2>
		<div className="joke">
			<p>{jokeState}</p>
			<button onClick={getJoke}>Siguiente</button>
		</div>
		</>
	)
}

export default Joke
