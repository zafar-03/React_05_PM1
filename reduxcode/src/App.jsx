import { increment,decrement, reset, square } from "./redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  let count  = useSelector((state)=>{
    return state.count;
  });
  let dispatch = useDispatch();

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
      <button onClick={()=>{dispatch(square())}}>Square</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default App
