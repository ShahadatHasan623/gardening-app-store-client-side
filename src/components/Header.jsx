import React from "react";
import '../index.css'
import { motion } from "motion/react"
import { NavLink } from "react-router";
import logoImg from '../assets/logo.png'

const Header = () => {
  const links = (
    <>
      <li className="text-white">
        <NavLink  to='/' className={({isActive})=>isActive ? "btn btn-info rounded-4xl border-none":""}>Home</NavLink>
      </li>
      <li className="text-white">
        <NavLink to='/shareTip' className={({isActive})=>isActive ? "btn btn-info rounded-4xl border-none":""}>Share a Garden Tip</NavLink>
      </li>
      <li className="text-white">
        <NavLink to='/exploreGarden' className={({isActive})=>isActive ? "btn btn-info rounded-4xl border-none":""}> Explore Gardeners</NavLink>
      </li>
      <li className="text-white">
        <NavLink to="/myTip" className={({isActive})=>isActive ? "btn btn-info rounded-4xl border-none":""}>My Tips</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="header bg-[#354e33] navbar shadow-sm px-4">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1">
            <img className="h-20" src={logoImg} alt="" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-green-200 to-green-500 bg-clip-text text-transparent">GreenNest</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2">
          <motion.button
          whileHover={{scale:1.1,textShadow:"opx opx 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}} 
           className="px-5 text-white font-semibold py-2  border-3 border-white rounded-4xl">Sing In</motion.button>
          <motion.button
           whileHover={{scale:1.1,textShadow:"opx opx 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)"}} 
           className="px-5 py-2 text-white  font-semibold border-3 border-white rounded-4xl">Sing Up</motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
