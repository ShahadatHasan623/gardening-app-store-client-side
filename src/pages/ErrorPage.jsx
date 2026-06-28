import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white font-sans overflow-hidden">
      
      {/* Background Decorative Blobs/Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      <div className="z-10 text-center px-6">
        {/* Main 404 Text with Gradient & Shadow */}
        <h1 className="text-[9rem] sm:text-[12rem] font-extrabold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-600 drop-shadow-[0_10px_20px_rgba(255,255,255,0.1)]">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-2xl sm:text-3xl font-semibold mt-2 text-slate-200">
          Oops! Page not found
        </h2>
        
        <p className="text-base text-slate-400 mt-3 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Interactive Button */}
        <div className="mt-8">
          <NavLink 
            to='/'
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-950 bg-white rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white hover:scale-105 hover:shadow-[0_4px_25px_rgba(124,58,237,0.4)] transition-all duration-300 ease-in-out"
          >
            {/* Optional: Simple SVG Arrow Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Homepage
          </NavLink>
        </div>
      </div>

    </div>
  );
};

export default ErrorPage;