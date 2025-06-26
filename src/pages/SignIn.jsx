import React, { use, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import signinAnimatedData from "../../public/singin.json";

const SignIn = () => {
  const { signIn, google, forgotPassword } = use(AuthContext);
  const navigate = useNavigate();
  const [showpassword, setPassword] = useState(false);
  const location = useLocation();
  const emailRef = useRef();

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
            title: "Your sign in was successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    google()
      .then((result) => {
        toast.success("Google sign in successful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-12 pt-30">
      <div className="w-full lg:w-1/2">
        <Lottie
          animationData={signinAnimatedData}
          loop={true}
          style={{ height: "400px" }} 
        />
      </div>

      {/* Sign In Form */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              ref={emailRef}
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showpassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setPassword(!showpassword)}
              className="absolute top-8 right-0 px-3 py-3"
            >
              {showpassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <div className="mt-2">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Log In
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border border-gray-300 w-full mt-3"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="mr-2"
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

        <p className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link to="/signUp" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
