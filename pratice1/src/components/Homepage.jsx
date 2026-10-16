import React from "react";

function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">

            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">
                Welcome to MyWebsite
              </h1>

              <p className="lead text-muted mt-3">
                Build amazing projects with modern technologies
                and powerful tools.
              </p>

              <div className="mt-4">
                <button className="btn btn-primary btn-lg me-2">
                  Get Started
                </button>

                <button className="btn btn-outline-dark btn-lg">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className="bg-primary text-white rounded-4 p-5">
                <h2>Build. Learn. Grow.</h2>
                <p className="mb-0">
                  Everything you need in one place.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Why Choose Us?</h2>

          <p className="text-muted">
            We provide simple and powerful solutions for your projects.
          </p>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4">
                <h4>Easy to Use</h4>
                <p className="text-muted">
                  Simple and user-friendly interface.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4">
                <h4>Fast</h4>
                <p className="text-muted">
                  Fast and optimized performance.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-4">
                <h4>Reliable</h4>
                <p className="text-muted">
                  Secure and reliable platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;