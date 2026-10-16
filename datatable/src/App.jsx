import { useEffect, useState } from "react";
import {IoFilter} from "react-icons/io5";

function App() {
  const API = "http://localhost:3000/students";
  const [allData, setAllData] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(() => {
    fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      response.json().then((data) => {
        setAllData(data);
      })
    })
  }, []);
  let [currentPage, setCurrentPage] = useState(1);
  let [dataPerPages, setDataPerPages] = useState(5);

  let TotalPages = Math.ceil(allData.length / dataPerPages);

  let lastIndex = currentPage * dataPerPages;
  let firstIndex = lastIndex - dataPerPages;

  let currentData = allData.slice(firstIndex, lastIndex);

  let [filterData,setFilterData] = useState([...currentData]);


  const handleFilter = ()=>{
    let output = currentData.sort((a,b)=>{
      return a.dsa-b.dsa;
    })
    setFilterData(output)
  }

  // useEffect(()=>{

  // },[currentData]);

  return (
    <>
      <div className="container mt-4 d-flex">
        <input type="text" className="flex-grow-1 rounded border-0 border-bottom py-2 px-3" placeholder="Search Here" onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>

      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>ROLL NO.</th>
                <th>NAME</th>
                <th className="d-flex justify-content-between align-items-center">DSA
                  <IoFilter
                    onClick={handleFilter}
                  />
                </th>
                <th>MATHS</th>
                <th>DBMS
                  
                </th>
                <th>NETWORKING</th>
              </tr>
            </thead>

            <tbody>
              {
                currentData.filter((element)=>{
                    return element.name.toLowerCase().includes(search.toLowerCase());
                }).map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{element.id}</td>
                      <td className="fw-bold">{element.name}</td>
                      <td>{element.dsa}</td>
                      <td>{element.maths}</td>
                      <td>{element.dbms}</td>
                      <td>{element.networking}</td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="6">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="d-flex align-items-center gap-2">
                      <span>Rows per Page:</span>

                      <select className="form-select form-select-sm w-auto" onChange={(e) => { setDataPerPages(e.target.value) }}>
                        <option >5</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                      </select>
                    </div>

                    {/* Page Info */}
                    <div className="text-muted">
                      {firstIndex + 1}-{lastIndex} of 100
                    </div>

                    {/* Navigation Buttons */}
                    <div className="d-flex gap-2">
                      <button disabled={currentPage == 1} className="btn btn-outline-secondary btn-sm" onClick={() => { setCurrentPage(currentPage - 1) }}>
                        🠈
                      </button>

                      <button disabled={currentPage == TotalPages} className="btn btn-outline-secondary btn-sm" onClick={() => { setCurrentPage(currentPage + 1) }}>
                        🠊
                      </button>
                    </div>

                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
