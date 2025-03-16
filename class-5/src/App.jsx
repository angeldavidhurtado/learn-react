import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [urlImg, setUrlImg] = useState('')

  useEffect(()=>{
    const urlApi = 'https://randomuser.me/api/'
    const res = fetch(urlApi)
    .then(res=>res.json())
    .then(data=>{
      const user = data.results[0]
      setName(`${user.name.first} ${user.name.last}`)
      setUrlImg(user.picture.large)
    })
    .catch(err=>console.log(err))
  }, [])

  return (
    <div className="App">
      <img src={urlImg || null } alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default App
