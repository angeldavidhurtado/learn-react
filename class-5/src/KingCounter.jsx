import { useState } from "react"

function KingCounter({king}) {
	const [counter, setCounter] = useState(0)

	return (
		<div className="king">
			<h3>{king.name}</h3>
			<span onClick={()=>setCounter(counter + 1)}>{counter}</span>
		</div>
	)
}

export default KingCounter
