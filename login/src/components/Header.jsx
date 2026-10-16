function Header() {

    let islogin = JSON.parse(localStorage.getItem("login")).islogin;
    //useEffect

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">

                        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
                            <img
                                src="https://img.magnific.com/premium-vector/vector-web-browser-icon-vector-illustration_921039-10899.jpg?semt=ais_hybrid&w=740&q=80"
                                alt="Website logo"
                                style={logo}
                            />
                            MyWebsite
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#mainNavbar"
                            aria-controls="mainNavbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="mainNavbar">

                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="about">
                                        About
                                    </a>
                                </li>
                            </ul>

                            <div className="d-flex gap-2">
                                {
                                    (islogin) ?
                                        <a href="signout" className="btn btn-outline-light btn-danger">
                                            Sign Out
                                        </a>
                                        :
                                        <div>
                                            <a href="login" className="btn btn-outline-light">
                                                Sign In
                                            </a>

                                            <a href="register" className="btn btn-primary">
                                                Sign Up
                                            </a>
                                        </div>
                                }
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;


const logo = {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "8px"
}