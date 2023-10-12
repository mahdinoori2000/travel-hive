import './Navbar.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './images/travel-hive-logo.PNG';

export default function DesktopNav() {
  return (
    <nav className="navbar">
      <NavLink to="/"><img src={logo} alt="Logo" className="logo" /></NavLink>
      <ul className="navbar-items">
        <DesktopNavItems path="/" name="Home" />
        <DesktopNavItems path="/destination" name="Destination" />
        <DesktopNavItems path="/service" name="Service" />
        <DesktopNavItems path="/blog" name="Blog" />
        <DesktopNavItems path="/page" name="Page" />
        <DesktopNavItems path="/contact" name="Contact" />
      </ul>
      <ul className="login">
        <DesktopNavItems path="/sign-in" name="Sign In" />
        <DesktopNavItems path="/sign-up" name="Sign Up" />
      </ul>
    </nav>
  );
}

function DesktopNavItems({ path, name }) {
  return (
    <li><NavLink to={path}>{name}</NavLink></li>
  );
}

DesktopNavItems.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
