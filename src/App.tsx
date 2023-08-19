import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from 'antd'
import CardFruit from './components/CardFruit'
import { frutas } from './utils/constants'
import './App.css'
import Contador from './components/Contador'
function App() {
  const [count, setCount] = useState(0)

  const increase = () => setCount((prev) => prev + 1)
  const decrease = () => setCount((prev) => prev - 1)

  const reset = () => setCount(0)


  return (
    <div style={{display:'flex', flexDirection:'column'}}>
    <Contador increase={increase} reset={reset} decrease={decrease}/>
 <div className='fruit_container'>
  {frutas.map(fruta => (<CardFruit key={fruta.title} counter={count} title={fruta.title} description={fruta.description} img={fruta.img} />))}
 </div>
    </div>
  )
}

export default App
