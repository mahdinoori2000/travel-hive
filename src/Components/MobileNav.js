import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiRollingSuitcase } from 'react-icons/ci';
import { FaRegNewspaper, FaSuitcaseRolling } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import {
  AiOutlineClose, AiOutlineHome, AiOutlineLogin, AiOutlineContacts,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import profilePic from '../assets/profile-pic.png';

export default function MobileNav() {
  const [openNav, setOpenNav] = useState(false);
  if (openNav) {
    return (
      <div className="h-[100vh] absolute left-0 top-0 z-10 w-[250px] bg-slate-50 ">
        <div className="bg-blue-500 h-[20vh] flex justify-between px-4 py-4 items-start">
          <div>
            <img src={profilePic} alt="Profile" className="w-[4.2rem] mb-[2.8rem]" />
            <h3 className="text-white">Profile Name</h3>
          </div>
          <button type="button" onClick={() => setOpenNav(false)}>
            <AiOutlineClose style={{ width: '1.2rem', height: '1.2rem', color: '#fff' }} />
          </button>
        </div>
        <ul className="p-4 flex flex-col gap-5">
          <MobileNavItems path="/" icon={<AiOutlineHome />} name="Home" />
          <MobileNavItems path="/destination" icon={<FaSuitcaseRolling />} name="Destination" />
          <MobileNavItems path="/service" icon={<CiRollingSuitcase />} name="Service" />
          <MobileNavItems path="/blog" icon={<FaRegNewspaper />} name="Blog" />
          <MobileNavItems path="/page" icon={<GrDocumentText />} name="Page" />
          <MobileNavItems path="/contact" icon={<AiOutlineContacts />} name="Contact" />
          <MobileNavItems path="/sign-in" icon={<AiOutlineLogin />} name="Sign-In" />
        </ul>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <button type="button" onClick={() => setOpenNav(true)} className="absolute left-3 top-3 z-10">
        <GiHamburgerMenu style={{ width: '2rem', height: '2rem' }} />
      </button>
    </div>
  );
}

function MobileNavItems({ path, icon, name }) {
  return (
    <li>
      <NavLink to={path} className="flex items-center gap-4">
        {icon}
        <span>{name}</span>
      </NavLink>
    </li>
  );
}

MobileNavItems.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
};
