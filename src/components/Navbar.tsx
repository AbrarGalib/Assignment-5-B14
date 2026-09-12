import React from 'react';
import Logo from '../assets/logo-text.png';
import HamburgerIcon from '../assets/hamburger.png';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 py-3">
        
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2 p-0">
              <img src={HamburgerIcon} alt="Menu" className="h-6 w-6" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className="text-pink-500 font-medium">Home</a></li>
              <li><a>Technologies</a></li>
              <li><a>Projects</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="hidden lg:flex cursor-pointer items-center">
            <img src={Logo} alt="Logo" className="h-8 object-contain" />
          </a>
        </div>
        
        {/* CENTER: Mobile Logo */}
        <div className="navbar-center flex lg:hidden">
           <a className="cursor-pointer flex items-center">
            <img src={Logo} alt="Logo" className="h-7 object-contain" />
          </a>
        </div>
        
        {/* CENTER: Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
            <li><a className="text-pink-500">Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        
        {/* RIGHT */}
        <div className="navbar-end flex gap-4 items-center">
          <a className="hidden sm:flex font-medium text-gray-600 hover:text-gray-900 cursor-pointer">Sign In</a>
          <a className="btn brand-gradient-bg text-white border-none rounded-full px-6 hover:opacity-90 min-h-0 h-10">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;