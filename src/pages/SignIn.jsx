import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signIn, google } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your singIn successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    google()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div class="min-h-[calc(100vh-117px)] flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 p-4 my-12 rounded-4xl max-w-6xl mx-auto p-12">
      <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleSignIn} class="space-y-6">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] w-full mt-3"
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
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </form>

        <p class="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link to="/signUp" class="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
