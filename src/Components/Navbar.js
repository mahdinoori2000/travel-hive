import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './images/travel-hive-logo.PNG';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/"><img src={logo} alt="Logo" className="logo" /></NavLink>
        <ul className="navbar-items">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/destination">Destination</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/page">Page</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="login">
          <NavLink to="/sign-in">Sign In</NavLink>
          <NavLink to="/sign-up">Sign Up</NavLink>
        </div>
      </nav>
    </>
  );
}
