import { useState } from "react"

function User({name="Name", lastName="Last Name", urlImg=""}) {
	const [nameState, setName] = useState(name)
	const [lastNameState, setLastName] = useState(lastName)
	const [urlImgState, setUrlImg] = useState(urlImg)

	const fullName = `${nameState} ${lastNameState}`

	return (
		<div className="user">
			<img src={urlImgState || null} alt={fullName} />
			<h2>{fullName}</h2>
		</div>
	)
}

export default User
