import Home from "./components/Home"

var obj = {
    fname : "Raj",
    lname : "Shah",
    age : 12
};

function App() {
 
  return (
    <>
      {/* <Home obj={obj}/> */}

      <Home fname = "Raj"
    lname = "Shah"
    age = {12} />
    </>
  )
}

export default App
