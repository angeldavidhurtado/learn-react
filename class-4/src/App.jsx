import Activity1 from './Activity1'
import './App.css'

const kings = [
  {
    name:"Atanagildo",
    reign:15,
    eatenCows:9
  }, {
    name:"Ervigio",
    reign:7,
    eatenCows:3
  }, {
    name:"Ataúlfo",
    reign:5,
    eatenCows:16
  }, {
    name:"Leogivildo",
    reign:18,
    eatenCows:3
  }, {
    name:"Sisebuto",
    reign:9,
    eatenCows:13
  }, {
    name:"Recesvinto",
    reign:19,
    eatenCows:11
  }, {
    name:"Teodorico",
    reign:33,
    eatenCows:12
  }
]

function App() {
  return (
    <div className="App">
      <Activity1 kings={kings} />
    </div>
  )
}

export default App
