import React from "react";
import logoImg from "../assets/logo.png";
import { NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="relative bg-green-900 text-white py-10 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-no-repeat bg-bottom bg-cover opacity-20"
        style={{
          backgroundImage: "url('https://i.ibb.co/hkT9G0D/footer.jpg')",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <img src={logoImg} alt="Logo" className="h-12 mb-2" />
          <h1 className="text-2xl font-bold">GreenNest BD</h1>
          <p className="text-sm mt-2">Grow with nature. Live green.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/myTip" className="hover:underline">
                My Tip
              </NavLink>
            </li>
            <li>
              <NavLink to="/exploreGarden" className="hover:underline">
                Explore Gardeners
              </NavLink>
            </li>
            <li>
              <NavLink to="/shareTip" className="hover:underline">
                shareTip
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:underline">
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <FaLocationDot className="text-red-800" />{" "}
              <span>123 Green Street, Dhaka, Bangladesh</span>{" "}
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />{" "}
              <span>+880 1700-000000</span>{" "}
            </li>
            <li className="flex items-center gap-2">
              <CiMail className="text-red-800" />{" "}
              <span>info@gardeningbd.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-green-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-green-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-green-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 text-center text-sm border-t border-green-800 pt-4">
        &copy; 2025 GreenNest BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
