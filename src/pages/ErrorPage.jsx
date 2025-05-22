import React from "react";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-sans">
      <h1 className="text-[8rem] font-bold animate-bounce">404</h1>
      <p className="text-xl mt-4 animate-fade-in">Oops! Page not found</p>
      <NavLink to='/'
        className="mt-6 px-6 py-2 bg-white text-gray-900 rounded-md shadow hover:bg-red-500 hover:text-white transition-all duration-300"
      >
        Go to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
