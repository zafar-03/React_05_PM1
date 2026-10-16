import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Hook1 from "./Hook1.jsx";
import Userform from './Userform.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hook1/> */}
    <Userform/>
  </StrictMode>,
)
