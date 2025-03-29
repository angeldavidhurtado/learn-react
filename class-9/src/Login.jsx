import { useContext, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './App'
import { r } from './App'
import './Login.css'

function Login() {
  const { user, login } = useContext(AuthContext)
  const inputUserNameRef = useRef(null)
  const navigate = useNavigate()

  console.log(`random Login ${r}`)

  useEffect(() => {
    if (user) navigate('/area/cp', {replace: true})
  }, [])

  const buttonLogin = () => {
    let userName = inputUserNameRef.current.value
    userName = userName.replace(/\s+/g, ' ').trim()
    if (!userName) return
    login(userName)
    navigate('/area/cp', {replace: true})
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
