import React, { use, useState } from "react";
import "../index.css";
import { motion } from "motion/react";
import { NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle";
import {
  FaHome,
  FaLightbulb,
  FaShareAlt,
  FaSeedling,
  FaListUl,
  FaTachometerAlt,
} from "react-icons/fa";

const Header = () => {
  const { user, signout } = use(AuthContext);
  const [open, setOpen] = useState(false);

  const handleSignOut = () => {
    signout();
    toast.success("Signout successfully");
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 px-3 py-2 rounded-xl bg-[#6dbb5a] text-white font-semibold shadow"
              : "flex items-center gap-2 px-3 py-2 rounded-xl text-white hover:bg-[#416b3a] transition"
          }
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browseTips"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 px-3 py-2 rounded-xl bg-[#6dbb5a] text-white font-semibold shadow"
              : "flex items-center gap-2 px-3 py-2 rounded-xl text-white hover:bg-[#416b3a] transition"
          }
        >
          <FaLightbulb /> Browse Tips
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exploreGarden"
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-2 px-3 py-2 rounded-xl bg-[#6dbb5a] text-white font-semibold shadow"
              : "flex items-center gap-2 px-3 py-2 rounded-xl text-white hover:bg-[#416b3a] transition"
          }
        >
          <FaSeedling /> Explore Gardeners
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 px-3 py-2 rounded-xl bg-[#6dbb5a] text-white font-semibold shadow"
                : "flex items-center gap-2 px-3 py-2 rounded-xl text-white hover:bg-[#416b3a] transition"
            }
          >
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="fixed top-0 bottom-0 z-50 w-full bg-[#354e33] navbar shadow-sm px-8 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-base-100"
          >
            {links}
          </ul>
        </div>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="flex items-center gap-1"
        >
          <img className="h-16" src={logoImg} alt="Logo" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-green-200 to-green-500 bg-clip-text text-transparent lg:block hidden">
            GreenNest
          </h1>
        </motion.div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2">
        <ThemeToggle />
        {user ? (
          <div className="relative inline-block text-left">
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
              <img
                className="w-12 h-12 rounded-full border-2 border-gray-300"
                src={user?.photoURL}
                alt="Profile"
              />
            </div>

            {open && (
              <div className="absolute right-0 mt-2 w-80 rounded-lg shadow-lg bg-white z-50">
                <div className="px-4 py-3 border-b flex flex-col items-center">
                  <p className="font-medium text-gray-800">
                    {user.displayName}
                  </p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <div className="p-2">
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-2 btn bg-gray-300 text-sm text-red-600 hover:bg-gray-100 rounded"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <NavLink
              to="/signIn"
              className="px-5 py-2 text-white font-semibold border-2 border-white rounded-2xl 
             transition transform hover:scale-110 hover:shadow-[0_0_5px_rgba(255,255,255,1)]"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signUp"
              className="px-5 py-2 text-white font-semibold border-2 border-white rounded-2xl 
             transition transform hover:scale-110 hover:shadow-[0_0_5px_rgba(255,255,255,1)]"
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
