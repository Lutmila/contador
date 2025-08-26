import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);



  return (
    <>
    <h1 className='title'>Contador</h1>
      <div className="card">
        <button disabled={count === 0} onClick={count === 0 ? () => {} : () => setCount((count) => count - 1)} > Restar </button>
        <p className="texto-contador">
         {count}
          
        </p>
        <button onClick={() => setCount((count) => count + 1)} > Sumar </button>
      </div>
    </>
  )
}

export default App
