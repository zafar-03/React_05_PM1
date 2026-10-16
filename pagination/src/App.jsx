import { useEffect, useState } from "react"

function App() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPageBlog = 3;
  let lastIndex = currentPage * perPageBlog;
  let firstIndex = lastIndex - perPageBlog;

  useEffect(() => {
    fetch("http://localhost:3000/blogs").then((response) => {
      response.json().then((data) => {
        setBlogs(data);
      })
    })
  }, []);
  let currentBlogs = blogs.slice(firstIndex, lastIndex);

  let totalPages = Math.ceil(blogs.length / perPageBlog);


  return (
    <>
      <div className="d-flex justify-content-center gap-2 mt-3 pb-4">
        <button disabled={currentPage == 1} onClick={() => { setCurrentPage(currentPage - 1) }}>Pre</button>
        {
          Array.from({ length: totalPages }).map((_, index) => {
            return (
              <button
                key={index}
                className="btn btn-primary"
                onClick={() => { setCurrentPage(index + 1) }}
              >
                {index + 1}
              </button>
            )
          })
        }
        <button disabled={currentPage == totalPages} onClick={() => { setCurrentPage(currentPage + 1) }}>Next</button>
      </div>

      <section className="container">
        <div className="row">
          {currentBlogs.map((element, index) => {
            return (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">

                  <img
                    src={element.image}
                    alt={element.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <p className="text-muted">ID : {element.id}</p>

                    <h3 className="card-title">
                      {element.title}
                    </h3>

                    <p className="card-text">
                      {element.description}
                    </p>

                    <p className="mb-1">
                      <b>Author:</b> {element.author}
                    </p>

                    <p>
                      <b>Date:</b> {element.date}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default App
