function Home() {
    return (
        <>
            <header className="bg-primary text-white text-center py-5">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold">Welcome to MyWebsite</h1>

                    <p className="lead mb-4">
                        We create simple, modern, and effective digital solutions.
                    </p>

                    <a href="#services" className="btn btn-light btn-lg me-2">
                        Explore Services
                    </a>

                    <a href="#contact" className="btn btn-outline-light btn-lg">
                        Contact Us
                    </a>
                </div>
            </header>

            <section id="services" className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Our Services</h2>
                        <p className="text-muted">
                            Everything you need to build a successful online presence.
                        </p>
                    </div>

                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <div className="fs-1 text-primary mb-3">💻</div>

                                    <h5 className="card-title">Web Development</h5>

                                    <p className="card-text">
                                        Fast, responsive, and user-friendly websites for your business.
                                    </p>

                                    <a href="#" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <div className="fs-1 text-success mb-3">🎨</div>

                                    <h5 className="card-title">Web Design</h5>

                                    <p className="card-text">
                                        Attractive designs that provide a great user experience.
                                    </p>

                                    <a href="#" className="btn btn-success">Learn More</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <div className="fs-1 text-danger mb-3">📈</div>

                                    <h5 className="card-title">Digital Marketing</h5>

                                    <p className="card-text">
                                        Practical strategies to help your brand reach more customers.
                                    </p>

                                    <a href="#" className="btn btn-danger">Learn More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;