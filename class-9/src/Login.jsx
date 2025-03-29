import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './App'
import { r } from './App'

function Login() {
  const { login } = useContext(AuthContext)
  const inputUserNameRef = useRef(null)
  const navigate = useNavigate()

  console.log(`random Login ${r}`)

  const buttonLogin = () => {
    let userName = inputUserNameRef.current.value
    userName = userName.replace(/\s+/g, ' ').trim()
    if (!userName) return
    login(userName)
    navigate('/area/cp')
  }

	return (
		<div className="Login">
      <h1>Vive el país</h1>
      <label htmlFor="user">Nombre</label>
      <input ref={inputUserNameRef} type="text" id="user" />
      <button onClick={buttonLogin}>Login</button>
    </div>
	)
}

export default Login
