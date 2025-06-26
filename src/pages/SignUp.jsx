import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import animateData from "../../public/register.json"

const SignUp = () => {
  const { signUp, google, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const [showpassword, setPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const password = form.password.value;

    if (password.length < 8) {
      Swal.fire("❌ Password must be at least 8 characters long.");
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire("❌ Password must include at least one lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire("❌ Password must include at least one uppercase letter.");
      return;
    } else if (!/[@$!%*?&]/.test(password)) {
      Swal.fire("❌ Password must include at least one special character.");
      return;
    }

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({ title: "SignUp Successfully!", icon: "success" });
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    google()
      .then((result) => {
        toast.success("Google Sign Up successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-6 mt-38 mb-20">
      {/* Lottie Animation */}
      <div className="w-full lg:w-1/2">
        <Lottie animationData={animateData} loop={true}></Lottie>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={handleSignUp}
        className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold" htmlFor="photo">
            Photo URL
          </label>
          <input
            id="photo"
            type="url"
            name="photoUrl"
            placeholder="Photo URL"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-gray-700 mb-2 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type={showpassword ? "text" : "password"}
            name="password"
            placeholder="********"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="button"
            onClick={() => setPassword(!showpassword)}
            className="absolute top-9 right-0 px-3 py-3"
          >
            {showpassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="btn bg-white text-black border border-gray-300 w-full mt-3"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          &nbsp; Sign Up with Google
        </button>

        <div className="pt-4 text-center">
          <p>
            Already have an account?
            <NavLink to="/signIn" className="text-blue-500 hover:underline ml-1">
              Sign In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
