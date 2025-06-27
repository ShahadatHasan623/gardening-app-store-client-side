import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FiLogOut } from "react-icons/fi";

const DashBoardProfile = () => {
  const { user, signout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user)

  if (!user) {
    return (
      <div className="text-center mt-10 text-red-500">No user data found.</div>
    );
  }

  const handleSignOut = async () => {
    await signout();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Signed out successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <div className="max-w-5xl min-h-screen my-12 py-12 rounded-3xl bg-gradient-to-br from-green-100 via-white to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center mx-auto px-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 md:p-14">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800 dark:text-green-300">
          Gardening User Profile
        </h2>

        <div className="flex flex-col items-center">
          <img
            src={user.photoURL || "https://i.ibb.co/2kR5zq0/default-user.png"}
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-green-500 shadow-lg mb-4"
          />

          <div className="text-center space-y-3 text-base">
            <p>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {user.displayName || "N/A"}
              </span>
            </p>
            <p>
              <span className="text-sm px-4 py-1 rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-white">
                {user.email}
              </span>
            </p>

            <div className="divider text-white before:bg-gray-400 after:bg-gray-400 mt-8">
              Profile Details
            </div>

            <p>
              <span className="font-semibold text-gray-600 dark:text-gray-400">
                User ID:{" "}
              </span>
              <span className="text-gray-900 dark:text-white">{user.uid}</span>
            </p>

            <p>
              <span className="font-semibold text-gray-600 dark:text-gray-400">
                Last Sign-In:{" "}
              </span>
              <span className="text-gray-900 dark:text-white">
                {user.metadata?.lastSignInTime || "N/A"}
              </span>
            </p>

            <p>
              <span className="font-semibold text-gray-600 dark:text-gray-400">
                Email Verified:{" "}
              </span>
              <span
                className={`font-semibold ${
                  user.emailVerified ? "text-green-600" : "text-red-600"
                }`}
              >
                {user.emailVerified ? "Yes" : "No"}
              </span>
            </p>
          </div>
        </div>

        <div className="divider before:bg-gray-300 after:bg-gray-300 mt-10"></div>

        <div className="text-center pt-6">
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-800 hover:scale-105 transition-all duration-300"
          >
            <FiLogOut className="text-xl" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoardProfile;
