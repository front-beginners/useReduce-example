import './App.css'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'IncrementAndShowText':
      return { count: state.count + 1, showText: !state.showText }
    case 'resetValue':
      return { count: 0, showText: true }
    default:
      return "This action doens't exist"
  }
}

function FrontBeginnersApp() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  })

  const { count, showText } = state

  const handleClick = () => {
    dispatch({ type: 'IncrementAndShowText' })
  }

  return (
    <div className='App'>
      <h1>Front Beginners</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>Clique</button>
      <button onClick={() => dispatch({ type: 'resetValue' })}>Reset</button>
      {showText && <p>Bem-vindo ao melhor canal de front-end</p>}
    </div>
  )
}

export default FrontBeginnersApp
