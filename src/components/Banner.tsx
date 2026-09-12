import React from 'react';
import BannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-6 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
          <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none rounded-lg px-8 hover:opacity-90">
            Explore Technologies
          </button>
          <button className="btn bg-white border border-gray-300 text-gray-700 rounded-lg px-8 hover:bg-gray-50 hover:border-gray-400 shadow-sm">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center lg:justify-end">
        <img 
          src={BannerImage} 
          alt="Development Stack Illustration" 
          className="w-full max-w-lg object-contain drop-shadow-xl" 
        />
      </div>
    </div>
    );
};

export default Banner;