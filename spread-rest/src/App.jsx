
import './App.css'

function App({ data }) {
  console.log(data);
  return (
    <>
      {
        data.map((element)=>{
           return (
            <section>
                <h2>First name : {element.fname}</h2>
                <h3>Lastname : {element.lname}</h3>
                <p>Age : {element.age}</p>
            </section>
           )
        })
      }
      {/* <h1>Hello {data[0].fname}</h1>
      <h2>Last name: {data[0].lname}</h2>
      <h3>Age : {data[0].age}</h3> */}
    </>
  )
}

export default App
