import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const arr = [
  {
    fname : "Raj",
    lname : "Shah",
    age : 10
  },
  {
    fname : "Rajesh",
    lname : "Sharma",
    age : 20
  },
  {
    fname : "Rajveer",
    lname : "Patel",
    age : 23
  }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={arr}/>
  </StrictMode>,
)
