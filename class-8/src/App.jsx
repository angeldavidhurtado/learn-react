import { useReducer, useRef } from 'react'
import './App.css'

const types = {
  addItem: 'addItem',
  deleteItem: 'deleteItem',
  addUnity: 'addUnity',
  subtractUnity: 'subtractUnity'
}
const reducer = (state, action) => {
  let newState = []
  switch (action.type) {
    case types.addItem:
      newState = [...state]
      const input = action.payload.current
      const nextId = state.length ? state.at(-1).id+1 : 0
      const newItem = {id:nextId, name:input.value, quantity:1}
      newState.push(newItem)
      input.value = ''; input.focus()
      return newState
    case types.deleteItem:
      const idItemToDelete = action.payload.productId
      newState = state.filter(item => item.id != idItemToDelete)
      return newState
    case types.addUnity:
      const idItemToAddUnity = action.payload.productId
      newState = state.map(product =>
        product.id == idItemToAddUnity
          ? {...product, quantity:product.quantity + 1}
          : product
      )
      return newState
    case types.subtractUnity:
      const idItemToSubtractUnity = action.payload.productId
      newState = state.map(product =>
        product.id == idItemToSubtractUnity && product.quantity > 1
          ? {...product, quantity:product.quantity-1 }
          : product
      )
      return newState
    default:
      return state
  }
}
const initialListState = [
  {id:1, name:'pan', quantity:3},
  {id:2, name:'arroz', quantity:2},
  {id:3, name:'manzana', quantity:4}
]

function App() {
  const [listState, dispatch] = useReducer(reducer, initialListState)
  const refInput = useRef()

  return (
    <div className="products">
      <div className="agregar-producto">
        <label htmlFor="input-product">Producto</label>
        <input type="text" ref={refInput} id="input-product" />
        <button onClick={()=>dispatch({type:types.addItem, payload:refInput})}>Agregar</button>
      </div>
      <div className="productos">
        {listState.map(item =>
          <div key={item.id}>
            <div className="name">
              {item.name}
            </div>
            <div className="quantity">
              {item.quantity}
            </div>
            <div className="actions">
              <button
                onClick={()=>dispatch({type:types.addUnity, payload:{productId:item.id}})}
              >+</button>
              <button
                onClick={()=>dispatch({type:types.subtractUnity, payload:{productId:item.id}})}
              >-</button>
              <button
                onClick={()=>dispatch({type:types.deleteItem, payload:{productId:item.id}})}
              >X</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
