import { useState } from 'react';
import './App.css'

function App() {
  let [count,setCount]  = useState(0);
  
  return (
      <>
        <h1>Hooks</h1>
        <div>
          <p>count : {count}</p>
          <button onClick={()=>{setCount(count+1)}}>Increment</button>
          <button onClick={()=>{setCount(0)}}>Reset</button>
          <button onClick={()=>{setCount(count-1)}}>Decrement</button>
          <button onClick={()=>{setCount(parseInt(Math.random()*100))}}>Random Value</button>

        </div>
      </>
  )
}

export default App
