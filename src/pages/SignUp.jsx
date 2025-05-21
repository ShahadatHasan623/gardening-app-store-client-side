import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const { signUp, google, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photoUrl.value;
    const password = form.password.value;

    if (password.length < 8) {
      Swal.fire("❌ Password must be at least 8 characters long.");
    } else if (!/[a-z]/.test(password)) {
      Swal.fire("❌ Password must include at least one lowercase letter.");
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire("❌ Password must include at least one uppercase letter.");
    } else if (!/[@$!%*?&]/.test(password)) {
      Swal.fire(
        "❌ Password must include at least one special character (@$!%*?&)."
      );
    } else {
      Swal.fire("✅ Password is strong.");
    }

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "SignUp Successfully!",
          icon: "success",
          draggable: true,
        });
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo});
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
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-117px)] max-w-6xl mx-auto flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-4xl p-12 my-12">
      <form
        onSubmit={handleSignUp}
        className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-transform  hover:shadow-3xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold" for="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold" for="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@mail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          />
        </div>
        <div class="mb-4">
          <label className="block text-gray-700 mb-2 font-semibold" for="email">
            Photo Url
          </label>
          <input
            id="photo"
            type="photo"
            name="photoUrl"
            placeholder="Photo Url"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 mb-2 font-semibold"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="********"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-colors"
        >
          Sign Up
        </button>

        <Link to='/'
          onClick={handleGoogleSignUp}
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
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
