import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          
          {/* Logo / Brand */}
          <Link className="navbar-brand fw-bold" to="/">
            MyWebsite
          </Link>

          {/* Menu */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/feature">
                  Feature
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;