import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { FiPlusCircle, FiFileText, FiImage, FiLayers, FiCheckCircle } from "react-icons/fi";

const ShareTip = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleShareTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = user?.displayName;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    
    const data = {
      name,
      email,
      ...userData,
      totalLike: 0, // নতুন টিপ শেয়ার করার সময় ডিফল্ট লাইক ০ থাকবে
    };

    fetch("https://gardening-store-server.vercel.app/garden", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Added Successfully!",
            text: "Your gardening tip is now live for the community.",
            background: document.documentElement.classList.contains("dark") ? "#18181b" : "#fff",
            color: document.documentElement.classList.contains("dark") ? "#fff" : "#000",
            confirmButtonColor: "#10b981",
          }).then(() => {
            form.reset();
            navigate('/browseTips');
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Something went wrong. Please try again later.",
        });
      });
  };

  return (
    <div className="max-w-5xl min-h-[calc(100vh-120px)] mx-auto py-12 px-4">
      {/* Main Premium Container */}
      <div className="bg-white dark:bg-zinc-900/90 border border-gray-100 dark:border-zinc-800/80 rounded-3xl shadow-xl overflow-hidden">
        
        {/* Header Ribbon Section */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 md:p-10 text-white text-center space-y-2">
          <div className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-2">
            <FiPlusCircle className="w-6 h-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Share Your Favorite Gardening Tip!
          </h1>
          <p className="text-emerald-50/90 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Have a unique gardening hack or helpful advice? Share your tips with our community of garden lovers! Your experience can help others grow better gardens.
          </p>
        </div>

        {/* Dynamic Form Setup */}
        <form onSubmit={handleShareTip} className="p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Title Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <FiFileText className="text-emerald-500" /> Tip Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g., Ultimate Composting Trick"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/40 text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-medium"
                required
              />
            </div>

            {/* Plant Type Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <FiLayers className="text-emerald-500" /> Plant Type
              </label>
              <input
                type="text"
                name="plantType"
                placeholder="e.g., Ferns, Succulents, Vegetables"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/40 text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-medium"
                required
              />
            </div>

            {/* Image URL Field */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <FiImage className="text-emerald-500" /> Image URL
              </label>
              <input
                type="text"
                name="Images"
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/40 text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-medium"
                required
              />
            </div>

            {/* Difficulty Level Group */}
            <div className="space-y-2 md:col-span-2 lg:col-span-1">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider block">
                Difficulty Level
              </label>
              <div className="flex flex-wrap gap-3">
                {["easy", "medium", "hard"].map((lvl, idx) => (
                  <label key={lvl} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/30 dark:bg-zinc-800/20 cursor-pointer hover:bg-gray-50 text-sm font-semibold capitalize text-gray-800 dark:text-zinc-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 dark:has-[:checked]:bg-emerald-950/20 dark:has-[:checked]:text-emerald-400 transition-all">
                    <input
                      type="radio"
                      name="level"
                      value={lvl}
                      defaultChecked={idx === 0} // ডিফল্ট প্রথমটি সিলেক্টেড থাকবে
                      className="accent-emerald-600 w-4 h-4"
                    />
                    {lvl}
                  </label>
                ))}
              </div>
            </div>

            {/* Category Group */}
            <div className="space-y-2 md:col-span-2 lg:col-span-1">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider block">
                Category
              </label>
              <div className="flex flex-wrap gap-3">
                {["Composting", "Plant Care", "Vertical Gardening"].map((cat, idx) => (
                  <label key={cat} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/30 dark:bg-zinc-800/20 cursor-pointer hover:bg-gray-50 text-sm font-semibold text-gray-800 dark:text-zinc-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 dark:has-[:checked]:bg-emerald-950/20 dark:has-[:checked]:text-emerald-400 transition-all">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      defaultChecked={idx === 0}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* Description Field */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider block">
                Description / Guide Details
              </label>
              <textarea
                name="description"
                rows="5"
                placeholder="Write step-by-step guidelines for garden lovers..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/40 text-gray-900 dark:text-zinc-100 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all text-sm font-medium resize-none"
                required
              ></textarea>
            </div>

            {/* Availability Radio Row */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider block">
                Tip Privacy Status
              </label>
              <div className="flex gap-4">
                {["public", "hidden"].map((status, idx) => (
                  <label key={status} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/30 dark:bg-zinc-800/20 cursor-pointer hover:bg-gray-50 text-sm font-semibold capitalize text-gray-800 dark:text-zinc-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 dark:has-[:checked]:bg-emerald-950/20 dark:has-[:checked]:text-emerald-400 transition-all">
                    <input
                      type="radio"
                      name="availability"
                      value={status}
                      defaultChecked={idx === 0}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    {status === "public" ? "🌍 Public (Visible to all)" : "🔒 Hidden (Private)"}
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Action Submit Button */}
          <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/60">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-base rounded-2xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <FiCheckCircle className="w-5 h-5" /> Publish & Add New Tip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTip;