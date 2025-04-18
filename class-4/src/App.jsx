import { useState } from 'react'
import Cena from './Cena'
import './App.css'

function App() {
  const [total, setTotal] = useState(0)

  const reyes = [
    {
      nombre: "Atanagildo",
      color: "darkolivegreen",
      precio: 178
    }, {
      nombre: "Ervigio",
      color: "crimson",
      precio: 169
    }, {
      nombre: "Ataúlfo",
      color: "peru",
      precio: 81
    }, {
      nombre: "Leogivildo",
      color: "darkmagenta",
      precio: 126
    }, {
      nombre: "Recesvinto",
      color: "royalblue",
      precio: 141
    }, {
      nombre: "Sisebuto",
      color: "teal",
      precio: 69
    }
  ]

  let king

  return (
    <div className="App">
      <h1>Cena con un rey</h1>
      <p>Total: <span>{total}</span></p>

      <div className="kings">      
        {(()=>{king = reyes[0]})()}
        <Cena name={king.nombre} price={king.precio} action={setTotal} color={king.color} />

        {(()=>{king = reyes[1]})()}
        <Cena name={king.nombre} price={king.precio} action={setTotal} color={king.color} />

        {(()=>{king = reyes[2]})()}
        <Cena name={king.nombre} price={king.precio} action={setTotal} color={king.color} />

        {(()=>{king = reyes[3]})()}
        <Cena name={king.nombre} price={king.precio} action={setTotal} color={king.color} />

        {(()=>{king = reyes[4]})()}
        <Cena name={king.nombre} price={king.precio} action={setTotal} color={king.color} />

        {(()=>{king = reyes[5]})()}
        <Cena name={king.nombre} price={king.precio} action={setTotal} color={king.color} />
      </div>

    </div>
  )
}

export default App
