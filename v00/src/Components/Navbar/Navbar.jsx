import { Link, NavLink } from "react-router-dom";
import "./navbar.css";


export default function Navbar() {

    const linkClass = ({ isActive }) =>
        isActive ? "nav-link nav-link--active" : "nav-link";

    return (
        <div className="header">
        <Link to="/" className="site-title">  ⌈ ini ⌉ </Link>
        <nav className="nav">
            <NavLink to="/writings" className={linkClass}>Writings</NavLink>
            <NavLink to="/" end className={linkClass}>Main</NavLink>
            <NavLink to="/projects" className={linkClass}>Projects</NavLink>
            <NavLink to="/resources" className={linkClass}>Resources</NavLink>
        </nav>

        </div>
    );
}
