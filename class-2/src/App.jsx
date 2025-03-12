import { useState } from 'react'
import './App.css'


function App() {
  const [iKing, setIKing] = useState(0)

  const kings = [
    {name: 'Ángel', hubby: 'programar'},
    {name: 'David', hubby: 'tocar guitarra'},
    {name: 'Alexander', hubby: 'montar patineta'}
  ]

  const nextKing = () => {
    setIKing( iKing < kings.length-1 ? iKing+1 : 0 )
  }

  return (
    <div className="App">
      <div className="msg">
        <p>La afición principal de <span className="darkviolet">{kings[iKing].name}</span> es <span className="green">{kings[iKing].hubby}</span></p>
        <button onClick={nextKing}>Ver siguiente</button>
      </div>
    </div>
  )
}

export default App
