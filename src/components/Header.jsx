import React, { use, useState } from "react";
import "../index.css";
import { motion, AnimatePresence } from "framer-motion"; // Clean path format
import { NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle";
import {
  FaHome,
  FaLightbulb,
  FaSeedling,
  FaTachometerAlt,
  FaBars,
  FaTimes,
  FaSignOutAlt
} from "react-icons/fa";

const Header = () => {
  const { user, signout } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    setOpen(false);
    signout();
    toast.success("Signed out successfully");
  };

  // <li> tags wrapped inside clean JSX structure
  const renderLinks = () => (
    <>
      <NavLink
        to="/"
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-950/40"
              : "text-slate-200 hover:bg-emerald-800/40 hover:text-white"
          }`
        }
      >
        <FaHome className="text-base" /> Home
      </NavLink>

      <NavLink
        to="/browseTips"
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-950/40"
              : "text-slate-200 hover:bg-emerald-800/40 hover:text-white"
          }`
        }
      >
        <FaLightbulb className="text-base" /> Browse Tips
      </NavLink>

      <NavLink
        to="/exploreGarden"
        onClick={() => setMobileMenuOpen(false)}
        className={({ isActive }) =>
          `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
            isActive
              ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-950/40"
              : "text-slate-200 hover:bg-emerald-800/40 hover:text-white"
          }`
        }
      >
        <FaSeedling className="text-base" /> Explore Gardeners
      </NavLink>

      {user && (
        <NavLink
          to="/dashboard"
          onClick={() => setMobileMenuOpen(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md shadow-emerald-950/40"
                : "text-slate-200 hover:bg-emerald-800/40 hover:text-white"
          }`
        }
        >
          <FaTachometerAlt className="text-base" /> Dashboard
        </NavLink>
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f351e]/85 backdrop-blur-md border-b border-emerald-800/30 shadow-lg h-20 flex items-center px-4 sm:px-8">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: LOGO & MOBILE HAMBURGER */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-white p-2 hover:bg-emerald-800/50 rounded-xl transition-all"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <img className="h-12 w-auto object-contain sm:h-14" src={logoImg} alt="GreenNest Logo" />
            <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-green-300 via-emerald-400 to-teal-200 bg-clip-text text-transparent tracking-tight hidden xs:block">
              GreenNest
            </h1>
          </motion.div>
        </div>

        {/* CENTER: DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-1">
          {renderLinks()}
        </nav>

        {/* RIGHT: THEME & AUTH ACTIONS */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {user ? (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center p-0.5 rounded-full border-2 border-emerald-500/60 hover:border-emerald-400 transition-all focus:outline-none z-50 relative"
              >
                <img
                  className="w-10 h-10 rounded-full object-cover shadow"
                  src={user?.photoURL || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"}
                  alt="Profile"
                />
              </button>

              {/* Fixed User Dropdown Profile Menu */}
              <AnimatePresence>
                {open && (
                  <>
                    {/* Background Overlay layer to capture close event trigger */}
                    <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setOpen(false)} />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-3 w-64 rounded-2xl shadow-2xl bg-slate-900 border border-slate-800/80 text-slate-100 z-50 overflow-hidden"
                    >
                      <div className="px-4 py-4 bg-gradient-to-b from-emerald-950/40 to-slate-900 border-b border-slate-800/60 flex flex-col items-center text-center">
                        <img
                          className="w-14 h-14 rounded-full border-2 border-emerald-500 object-cover mb-2"
                          src={user?.photoURL}
                          alt="Avatar"
                        />
                        <p className="font-semibold text-white truncate w-full px-2">{user.displayName}</p>
                        <p className="text-xs text-slate-400 truncate w-full px-2 mt-0.5">{user.email}</p>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-rose-500/10 hover:bg-rose-600 text-sm font-semibold text-rose-400 hover:text-white rounded-xl transition duration-200"
                        >
                          <FaSignOutAlt /> Sign Out
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <NavLink
                to="/signIn"
                className="hidden sm:inline-block px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800/40 rounded-xl transition"
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signUp"
                className="px-4 py-2 text-sm font-bold text-slate-950 bg-gradient-to-r from-green-300 to-emerald-400 rounded-xl shadow hover:from-green-400 hover:to-emerald-500 transition duration-300"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* MOBILE DRAWER (SLIDEOUT SIDEBAR) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-20 bg-black/60 backdrop-blur-xs z-60 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-20 bottom-0 left-0 w-64 bg-[#142613] border-r border-emerald-900/30 p-4 z-50 lg:hidden h-64 shadow-2xl flex flex-col gap-3"
            >
              {renderLinks()}
              {!user && (
                <div className="mt-2 pt-4 border-t border-emerald-900/40 flex flex-col gap-2 sm:hidden">
                  <NavLink
                    to="/signIn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2 text-sm font-medium text-white rounded-xl border border-emerald-700/60"
                  >
                    Sign In
                  </NavLink>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;