import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Create Single Element 
// const element = <h1>Hello Everyone</h1>;

// Render 
// const root =  createRoot(document.querySelector('#root'));

// root.render(element);

const root = createRoot(document.querySelector("#root"));

root.render(<App/>);