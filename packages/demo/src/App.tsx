import { useState } from 'react'
import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const fn1 = () => {
    setCount1((count1) => count1 + 1)
    setCount1((count1) => count1 + 2)
  }

  const fn2 = () => {
    setCount2(count2 + 1)
    // setCount2(() => count2 + 1)
    setCount2(count2 + 2)
    // setCount2(() => count2 + 2)
  }

  setTimeout(() => {
    setCount1((count1) => count1 + 1)
    setCount1((count1) => count1 + 2)
  }, 1)

  return (
    <div className="App">
      <h2>count1: {count1}</h2>
      <h2>count2: {count2}</h2>
      <button onClick={fn1}>f1 click me</button>
      <button onClick={fn2}>f2 click me</button>
    </div>
  )
}

export default App
