import React from "react";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹199",
      features: [
        "5 Projects",
        "5 GB Storage",
        "Basic Support"
      ]
    },
    {
      name: "Professional",
      price: "₹499",
      features: [
        "20 Projects",
        "20 GB Storage",
        "Priority Support"
      ]
    },
    {
      name: "Premium",
      price: "₹999",
      features: [
        "Unlimited Projects",
        "100 GB Storage",
        "24/7 Support"
      ]
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">

        <div className="text-center mb-5">
          <h1 className="fw-bold">Pricing</h1>
          <p className="text-muted">
            Choose the plan that works best for you.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {plans.map((plan, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className={`card h-100 shadow-sm ${
                index === 1 ? "border-primary border-2" : ""
              }`}>

                {index === 1 && (
                  <div className="badge bg-primary position-absolute top-0 start-50 translate-middle">
                    Popular
                  </div>
                )}

                <div className="card-body text-center p-5">

                  <h3 className="fw-bold">
                    {plan.name}
                  </h3>

                  <h2 className="display-5 fw-bold my-4">
                    {plan.price}
                    <small className="fs-6 text-muted">
                      /month
                    </small>
                  </h2>

                  <ul className="list-group list-group-flush mb-4">
                    {plan.features.map((feature, i) => (
                      <li
                        className="list-group-item"
                        key={i}
                      >
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="btn btn-primary w-100">
                    Choose Plan
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

export default Pricing;