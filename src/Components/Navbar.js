import { useEffect, useState } from 'react';
import './Navbar.css';
// import { NavLink } from 'react-router-dom';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import logo from './images/travel-hive-logo.PNG';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

export default function Navbar() {
  const [mobileScreenSize, setMobileScreenSize] = useState(window.innerWidth < 900);

  useEffect(() => {
    function handleResize() {
      setMobileScreenSize(window.innerWidth < 900);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {mobileScreenSize ? <MobileNav /> : <DesktopNav />}
    </>
  );
}
