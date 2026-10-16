import { useEffect, useState } from "react"

function App() {

  const [count, setCount] = useState(0);
  const [data,setData] = useState(0);


  useEffect(()=>{
    console.log("Both Value Changed");
  });

  useEffect(() => {
    console.log("Use Effect Running");
  },[]);


  useEffect(() => {
    console.log("Count Changed");
    localStorage.setItem("count",count);
  },[count]);

  return (
    <>
      <h1>Hello</h1>
      <p>count : {count}</p>
      <p>data : {data}</p>
      <button onClick={() => { setCount(count + 1) }}>Click for 1</button>
      <button onClick={() => { setData(data + 10) }}>Click for 2</button>

    </>
  )
}

export default App
