import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './images/travel-hive-logo.PNG';

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/"><img src={logo} alt="Logo" /></NavLink>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/destination">Destination</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/page">Page</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div>
          <button type="button">Sign In</button>
          <button type="button">Sign Up</button>
        </div>
      </nav>
    </>
  );
}
