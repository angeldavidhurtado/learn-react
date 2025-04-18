import Provider from './Context/Provider'
import Lenguage from './Lenguage'
import Text from './Text'
import Buttons from './Buttons'
import './App.css'

function App() {
  return (
    <Provider>
      <Lenguage />
      <Text />
      <Buttons />
    </Provider>
  )
}

export default App
