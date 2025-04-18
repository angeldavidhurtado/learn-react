import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Login</h1>
      <button onClick={() =>
        navigate('/', { replace: true })
      }>Login</button>
    </>
  )
}

export default Login
