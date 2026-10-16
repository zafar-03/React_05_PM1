import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route,Routes} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";




function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signout" element={<Logout/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
