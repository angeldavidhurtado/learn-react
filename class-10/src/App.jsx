import { useContext } from 'react'
import Context from './Context'
import { useForm } from 'react-hook-form'
import Place from './Place'
import './App.css'

function App() {
  console.log(useForm)

  return (
    <Context>
      <Place />
    </Context>
  )
}

export default App
