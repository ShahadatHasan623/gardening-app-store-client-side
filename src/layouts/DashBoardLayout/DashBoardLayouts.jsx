import React, { use } from "react";
import { Outlet, NavLink } from "react-router";
import gardeningLogo from "../../assets/logo.png";
import { FaHome, FaListUl, FaShareAlt, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const DashBoardLayouts = () => {
  const { signout } = use(AuthContext);

  //   logut user
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signout();
        Swal.fire({
          title: "Logged out!",
          text: "You have been logged out.",
          icon: "success",
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Logout failed.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-start">
        {/* Mobile Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-semibold text-xl text-green-800">
            Dashboard
          </div>
        </div>

        {/* Page content */}
        <div className="w-full px-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4 space-y-1">
          {/* Sidebar Logo */}
          <NavLink
            to="/"
            className="flex flex-col items-center justify-center mb-4"
          >
            <img
              className="h-20 w-20 object-contain"
              src={gardeningLogo}
              alt="Logo"
            />
            <h1 className="text-2xl font-bold text-green-700">Dashboard</h1>
          </NavLink>
          {/* Sidebar Links with Icons */}
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 bg-green-200 text-green-900 font-semibold rounded-lg px-3 py-2"
                  : "flex items-center gap-2 hover:bg-green-100 rounded-lg px-3 py-2"
              }
            >
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/shareTip"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 bg-green-200 text-green-900 font-semibold rounded-lg px-3 py-2"
                  : "flex items-center gap-2 hover:bg-green-100 rounded-lg px-3 py-2"
              }
            >
              <FaShareAlt /> Share a Garden Tip
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myTip"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 bg-green-200 text-green-900 font-semibold rounded-lg px-3 py-2"
                  : "flex items-center gap-2 hover:bg-green-100 rounded-lg px-3 py-2"
              }
            >
              <FaListUl /> My Tips
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/myprofile"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 bg-green-200 text-green-900 font-semibold rounded-lg px-3 py-2"
                  : "flex items-center gap-2 hover:bg-green-100 rounded-lg px-3 py-2"
              }
            >
              <FaUser /> My Profile
            </NavLink>
          </li>
          <button
            onClick={() => handleLogOut()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-800 hover:scale-105 transition-all duration-300 mt-5"
          >
            <FiLogOut className="text-xl" />
            Sign Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardLayouts;
