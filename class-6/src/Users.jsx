import User from './User'
import { useEffect, useState } from "react"

function Users() {
	const [usersComponent, setUsersComponent] = useState([])

	useEffect(()=>{
		const urlApi = 'https://randomuser.me/api/?results=3'
		const res = fetch(urlApi)
		.then(res=>res.json())
		.then(data=>{
			const users = data.results
			setUsersComponent( users.map(user =>
				<User
					key={user.email}
					name={user.name.first}
					lastName={user.name.last}
					urlImg={user.picture.large}
				/>
			))
		})
		.catch(err=>console.log(err))
	}, [])

	return (
		<div className="users">
      {usersComponent}
    </div>
	)
}

export default Users
