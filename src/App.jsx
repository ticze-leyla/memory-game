import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app flex flex-col items-center'>
      <h1 className='title'>Juego Memoria</h1>
     <Board/>
    </div>
  )
}

export default App
