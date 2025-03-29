import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './App'
import { r } from './App'
import './Login.css'

function Login() {
  const { login } = useContext(AuthContext)
  const inputUserNameRef = useRef(null)
  const navigate = useNavigate()

  console.log(`random Login ${r}`)

  const buttonLogin = () => {
    const userName = inputUserNameRef.current.value
    const logged = login(userName)
    if (logged) navigate('/area/cp', {replace: true})
  }

	return (
		<div className="login">
      <h1>Vive el país</h1>
      <label htmlFor="user">Nombre de usuario</label>
      <input ref={inputUserNameRef} type="text" id="user" />
      <button onClick={buttonLogin}>Login</button>
    </div>
	)
}

export default Login
