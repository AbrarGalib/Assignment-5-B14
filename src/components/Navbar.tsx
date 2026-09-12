import React from 'react';
import Logo from '../assets/logo-text.png';
import HamburgerIcon from '../assets/hamburger.png';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <img src={HamburgerIcon} alt="Hamburger Menu" className="h-5 w-5" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className="text-pink-500 font-medium">Home</a></li>
              <li><a>Technologies</a></li>
              <li><a>Projects</a></li>
              <li><a>About</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <a className="cursor-pointer flex items-center">
            <img src={Logo} alt="DevStack Logo" className="h-8 md:h-10 object-contain" />
          </a>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
            <li><a className="text-pink-500">Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        
        <div className="navbar-end flex gap-4">
          <a className="hidden lg:flex font-medium text-gray-600 hover:text-gray-900 cursor-pointer items-center">Sign In</a>
          <a className="btn bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none rounded-full px-6 hover:opacity-90">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;