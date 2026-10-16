import React from "react";

function Feature() {
  const features = [
    {
      title: "Easy to Use",
      description: "Simple and clean interface for everyone."
    },
    {
      title: "Fast Performance",
      description: "Optimized for speed and better performance."
    },
    {
      title: "Responsive Design",
      description: "Works perfectly on mobile, tablet and desktop."
    },
    {
      title: "Secure",
      description: "Your data and information are protected."
    },
    {
      title: "Modern Technology",
      description: "Built using modern web technologies."
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">Features</h1>
          <p className="text-muted">
            Explore our powerful features
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3"
                       style={{ width: "50px", height: "50px" }}>
                    {index + 1}
                  </div>

                  <h4 className="card-title">
                    {feature.title}
                  </h4>

                  <p className="card-text text-muted">
                    {feature.description}
                  </p>

                  <button className="btn btn-outline-primary">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Feature;