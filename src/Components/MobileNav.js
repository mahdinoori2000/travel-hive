import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiRollingSuitcase } from 'react-icons/ci';
import { FaRegNewspaper, FaSuitcaseRolling } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import {
  AiOutlineClose, AiOutlineHome, AiOutlineLogin, AiOutlineContacts,
} from 'react-icons/ai';

export default function MobileNav() {
  const [openNav, setOpenNav] = useState(false);
  document.addEventListener('mousedown', () => setOpenNav(false));
  if (openNav) {
    return (
      <div className="absolute left-0 top-0 z-10 w-[200px] bg-slate-500 ">
        <button type="button" onClick={() => setOpenNav(false)}>
          <AiOutlineClose />
        </button>
        <ul>
          <li className="flex items-center">
            <AiOutlineHome />
            {' '}
            <span>Home</span>
          </li>
          <li className="flex items-center">
            <FaSuitcaseRolling />
            {' '}
            <span>Destination</span>
          </li>
          <li className="flex items-center">
            <CiRollingSuitcase />
            {' '}
            <span>Service</span>
          </li>
          <li className="flex items-center">
            <FaRegNewspaper />
            {' '}
            <span>Blog</span>
          </li>
          <li className="flex items-center">
            <GrDocumentText />
            {' '}
            <span>Page</span>
          </li>
          <li className="flex items-center">
            <AiOutlineContacts />
            {' '}
            <span>Contact</span>
          </li>
          <li className="flex items-center">
            <AiOutlineLogin />
            {' '}
            <span>Sign in</span>
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
