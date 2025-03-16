import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(()=>{
    const urlApi = 'https://randomuser.me/api/'
    const res = fetch(urlApi)
    .then(res=>res.json())
    .then(data=>console.log(data.results[0].name.first))
    .catch(err=>console.log(err))
  }, [])

  return (
    <div className="App">
      <p>Hola mundo !!!</p>
    </div>
  )
}

export default App
