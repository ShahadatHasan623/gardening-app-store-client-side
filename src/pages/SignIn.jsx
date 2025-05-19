import React from "react";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 p-4 rounded-4xl">
      <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        <form class="space-y-6">
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
