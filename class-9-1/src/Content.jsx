import { useNavigate } from 'react-router-dom'

function Content() {
  const navigate = useNavigate()

  return (
    <>
      <h1>Contenido</h1>
      <button onClick={() =>
        navigate('/login', { replace: true })
      }>Ir a Login</button>
    </>
  )
}

export default Content
