import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiRollingSuitcase } from 'react-icons/ci';
import { FaRegNewspaper, FaSuitcaseRolling } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import {
  AiOutlineClose, AiOutlineHome, AiOutlineLogin, AiOutlineContacts,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
  const [openNav, setOpenNav] = useState(false);
  if (openNav) {
    // document.addEventListener('mousedown', () => setOpenNav(false));
    return (
      <div className="absolute left-0 top-0 z-10 w-[200px] bg-slate-500 ">
        <button type="button" onClick={() => setOpenNav(false)}>
          <AiOutlineClose />
        </button>
        <ul>
          <li className="flex items-center">
            <NavLink to="/">
              <AiOutlineHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className="flex items-center">
              <FaSuitcaseRolling />
              <span>Destination</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/service">
              <CiRollingSuitcase />
              <span>Service</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/blog">
              <FaRegNewspaper />
              <span>Blog</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/page">
              <GrDocumentText />
              <span>Page</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/contact">
              <AiOutlineContacts />
              <span>Contact</span>
            </NavLink>
          </li>
          <li className="flex items-center">
            <NavLink to="/sign-in">
              <AiOutlineLogin />
              <span>Sign in</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <button type="button" onClick={() => setOpenNav(true)} className="w-8 absolute left-0 top-0 z-10">
        <GiHamburgerMenu />
      </button>
    </div>
  );
}
