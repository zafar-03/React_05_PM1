import Header from "./components/Header"
import Home from "./components/Home"
import {Route,Routes} from "react-router-dom"
import Pizza from "./components/ui/Pizza"

function App() {
  const pizzaData = [
  {
    title: "Margherita Pizza",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    price: 299,
    description: "Classic pizza with fresh tomato sauce, mozzarella cheese and Italian herbs."
  },
  {
    title: "Farmhouse Pizza",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    price: 399,
    description: "Loaded with onion, capsicum, tomato, mushroom and delicious cheese."
  },
  {
    title: "Peppy Paneer Pizza",
    img: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
    price: 449,
    description: "Spicy paneer with capsicum, onion and extra cheese for a tasty experience."
  },
  {
    title: "Veggie Supreme Pizza",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47",
    price: 499,
    description: "A delicious combination of fresh vegetables, cheese and flavorful herbs."
  },
  {
    title: "Cheese Burst Pizza",
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
    price: 549,
    description: "Extra cheesy pizza with a creamy cheese-filled crust and rich toppings."
  }
];
  return (
    <>
      <section class="container-fluid">
    <div class="row vh-100">

        <aside class="col-3">
            <Header/>
        </aside>
        <aside class="col-9 ">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pizza1" element={<Pizza data={pizzaData[0]}/>}/>
            <Route path="/pizza2" element={<Pizza data={pizzaData[1]}/>}/>
            <Route path="/pizza3" element={<Pizza data={pizzaData[2]}/>}/>
            <Route path="/pizza4" element={<Pizza data={pizzaData[3]}/>}/>
            <Route path="/pizza5" element={<Pizza data={pizzaData[4]}/>}/>
          </Routes>

        </aside>

    </div>
</section>
    </>
  )
}

export default App
