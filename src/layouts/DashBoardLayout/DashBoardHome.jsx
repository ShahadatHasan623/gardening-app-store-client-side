import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Lottie from "lottie-react";
import welcomeAnimate from "../../../public/welcome.json";

const DashBoardHome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-[80vh] my-12 flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-green-50 to-white rounded-lg shadow-md py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">
         Hi, {user?.displayName || "Gardener"}!
      </h1>
      <h2 className="text-xl md:text-2xl text-green-700 mb-4">
        Welcome to your Gardening Dashboard
      </h2>
      <p className="text-gray-600 max-w-xl mb-8">
        Manage your <span className="font-medium text-green-700">garden tips</span>,
        view <span className="font-medium text-green-700">your contributions</span>,
        and update your <span className="font-medium text-green-700">profile</span> — all from one place.
      </p>
      <div className="max-w-md w-full">
        <Lottie animationData={welcomeAnimate} loop={true} />
      </div>
    </div>
  );
};

export default DashBoardHome;
