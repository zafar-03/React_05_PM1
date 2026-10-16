import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "./redux/action";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [pname, setPname] = useState("");
  const [catagory, setCatagory] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [id, setId] = useState(null);

  const allData = useSelector((state) => {
    return state.products
  });

  const handlesubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(editProduct({
        id: id,
        name: pname,
        category: catagory,
        price: price,
        brand: brand
      }));
    } else {
      dispatch(addProduct({
        id: allData.length + 1,
        name: pname,
        category: catagory,
        price: price,
        brand: brand
      }));
    }

    setId(null);
    setPname("");
    setCatagory("");
    setPrice("");
    setBrand("");

  }

  const handleEdit = (product) => {
    setPname(product.name);
    setId(product.id);
    setCatagory(product.category);
    setPrice(product.price);
    setBrand(product.brand);
  }

  return (
    <>
      <div className="container mt-5">

        <h1 className="text-center mb-4">REDUX CRUD</h1>

        {/* Add Product Form */}
        <div className="card shadow mb-5">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Add Product</h4>
          </div>

          <div className="card-body">
            <form>
              <div className="row">

                {/* Name */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    value={pname}
                    className="form-control"
                    placeholder="Enter product name"
                    onChange={(e) => { setPname(e.target.value) }}
                  />
                </div>

                {/* Category */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={catagory}
                    className="form-control"
                    placeholder="Enter category"
                    onChange={(e) => { setCatagory(e.target.value) }}

                  />
                </div>

                {/* Price */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    className="form-control"
                    placeholder="Enter price"
                    onChange={(e) => { setPrice(e.target.value) }}

                  />
                </div>

                {/* Brand */}
                <div className="col-md-6 mb-3">
                  <label className="form-label">Brand</label>
                  <input
                    type="text"
                    name="brand"
                    className="form-control"
                    placeholder="Enter brand"
                    value={brand}
                    onChange={(e) => { setBrand(e.target.value) }}

                  />
                </div>

              </div>

              <button type="submit" className="btn btn-success"
                onClick={handlesubmit}
              >
                Add Product
              </button>

              <button type="reset" className="btn btn-secondary ms-2"
              onClick={()=>{
                    setId(null);
                    setPname("");
                    setCatagory("");
                    setPrice("");
                    setBrand("");
              }}
              >
                Reset
              </button>
            </form>
          </div>
        </div>

        {/* Product Table */}
        <div className="card shadow">
          <div className="card-header bg-dark text-white">
            <h4 className="mb-0">Product List</h4>
          </div>

          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Sr No.</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    allData.map((product, index) => {
                      return (
                        <tr key={index}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.category}</td>
                          <td>{product.brand}</td>
                          <td>₹{product.price}</td>

                          <td>
                            <button className="btn btn-warning btn-sm me-2"
                              onClick={() => { handleEdit(product) }}
                            >
                              Edit
                            </button>

                            <button className="btn btn-danger btn-sm"
                              onClick={() => { dispatch(deleteProduct(product.id)) }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
