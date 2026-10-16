import Header from "./components/Header"
import Feature from "./components/Feature"
import Pricing from "./components/Pricing"
import Homepage from "./components/Homepage"

import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
      <Header/>

      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/feature" element={<Feature/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
      </Routes>
    </>
  )
}

export default App
