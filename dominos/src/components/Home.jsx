

function Home() {
  return (
    <section className="container-fluid vh-100 d-flex align-items-center">
      <div className="container text-center">

        {/* Title */}
        <h1 className="display-3 fw-bold text-primary">
          Welcome to Domino's
        </h1>

        {/* Logo */}
        <div className="my-4">
          <h2 className="text-danger fw-bold">
            Domino's
          </h2>
          <p className="text-muted">
            Pizza Delivered Fresh & Fast
          </p>
        </div>

        {/* Company Details */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow p-4">
              <h3 className="mb-3">Company Details</h3>

              <p>
                <strong>Company Name:</strong> Domino's Pizza
              </p>

              <p>
                <strong>Industry:</strong> Food & Restaurant
              </p>

              <p>
                <strong>Speciality:</strong> Pizza, Sides & Beverages
              </p>

              <p>
                <strong>Service:</strong> Online Food Delivery
              </p>

              <p className="mb-0">
                Domino's is a popular pizza company known for
                delivering fresh and delicious pizzas quickly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;