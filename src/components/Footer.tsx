import React from 'react';
import Logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 flex flex-col md:flex-row gap-12 justify-between">
        <div className="max-w-sm">
          <a className="cursor-pointer mb-6 block">
            <img src={Logo} alt="DevStack Logo" className="h-8 md:h-10 object-contain" />
          </a>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
            <span className="text-gray-300">•</span>
            <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="flex gap-12 md:gap-16 flex-wrap">
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;