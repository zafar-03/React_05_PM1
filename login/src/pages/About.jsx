function About() {
    return (
        <>
            <section id="about" className="bg-light py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3">Why Choose Us?</h2>

                    <p className="lead mx-auto" style={{maxWidth : "750px"}}>
                        We combine creativity, technology, and experience to deliver reliable
                        solutions that help businesses grow.
                    </p>
                </div>
            </section>

            <section id="contact" className="py-5 text-center">
                <div className="container">
                    <h2 className="fw-bold">Ready to Get Started?</h2>

                    <p className="text-muted mb-4">
                        Contact us today and let us discuss your next project.
                    </p>

                    <a href="mailto:info@example.com" className="btn btn-primary btn-lg">
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    )
}
export default About;