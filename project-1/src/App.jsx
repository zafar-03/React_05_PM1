import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';

const cssData = {
  color : "blue",
  fontSize : "56px",
  fontFamily : "cursive"
};

function App() {
  const fname = "Rajesh";
  return (
    <>
      {/*<h1>Hello</h1>*/}
      {/* <h2>Hello {fname}</h2> */}
      {/* <h1 style={{color:"red",fontSize:"100px"}} className="class1">Hello</h1> */}
        <h1 style={cssData} className="class1">Hello</h1>
      <label htmlFor="" id=""></label>
      <img />
    </>
  )
}

export default App
