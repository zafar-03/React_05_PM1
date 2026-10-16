import { Link } from "react-router-dom";
function Header() {
  return (
    <aside className="text-primary vh-100 p-3">
      <h3>
        <Link to="/">Domino's</Link>
      </h3>

      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">
          <span className="nav-link text-white">
            <Link to="/pizza1">Pizza 1 </Link> 
          </span>
        </li>

        <li className="nav-item mb-2">
          <span className="nav-link text-white">
            <Link to="/pizza2">Pizza 2 </Link> 
          </span>
        </li>

        <li className="nav-item mb-2">
          <span className="nav-link text-white">
            <Link to="/pizza3">Pizza 3 </Link> 
          </span>
        </li>

        <li className="nav-item mb-2">
          <span className="nav-link text-white">
            <Link to="/pizza4">Pizza 4 </Link> 
          </span>
        </li>

        <li className="nav-item mb-2">
          <span className="nav-link text-white">
            <Link to="/pizza5">Pizza 5 </Link> 
          </span>
        </li>
      </ul>
    </aside>
  );
}

export default Header;