import React from "react";

function Pizza(props) {
    console.log(props)
  return (
    <section className="container py-5">
      <div className="row justify-content-center">

        <div className="col-md-6">
          <div className="card shadow">
            <img
              src={props.data.img}
              className="card-img-top"
              alt="Margherita Pizza"
            />

            <div className="card-body">

              <h1 className="card-title">
                {props.data.title}
              </h1>

              <h3 className="text-success">
                ₹{props.data.price}
              </h3>

              <p className="card-text">
                {props.data.description}
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Pizza;