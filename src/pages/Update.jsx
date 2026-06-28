import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FiEdit3, FiFileText, FiImage, FiLayers, FiCheckCircle } from "react-icons/fi";

const Update = () => {
  const updateUser = useLoaderData() || {};
  const navigate = useNavigate();
  
  const {
    _id,
    Images,
    title,
    plantType,
    level,
    category,
    description,
    availability,
  } = updateUser;

 const handleUpdate = (e) => {
  e.preventDefault();
  const form = e.target;
  const formdata = new FormData(form);
  const updateGarden = Object.fromEntries(formdata.entries());

  fetch(`https://gardening-store-server.vercel.app/garden/${_id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(updateGarden),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount > 0 || data.matchedCount > 0) {
        Swal.fire({
          icon: "success",
          title: data.modifiedCount > 0 ? "Updated Successfully!" : "No Changes Made",
          text: data.modifiedCount > 0 ? "Your gardening tip has been modified." : "The tip data remained the same.",
          background: document.documentElement.classList.contains("dark") ? "#18181b" : "#fff",
          color: document.documentElement.classList.contains("dark") ? "#fff" : "#000",
          confirmButtonColor: "#10b981",
        }).then(() => {
         
          navigate("/dashboard/myTip"); 
        });
      }
    })
    .catch((err) => {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong while updating.",
      });
    });
};
  return (
    <div className="max-w-5xl min-h-[calc(100vh-120px)] mx-auto py-12 px-4">
      {/* Container Dashboard Card */}
      <div className="bg-white dark:bg-zinc-900/90 border border-gray-100 dark:border-zinc-800/80 rounded-3xl shadow-xl overflow-hidden">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-8 md:p-10 text-white text-center space-y-2">
          <div className="inline-flex p-3 bg-white/10 backdrop-blur-md rounded-2xl mb-2">
            <FiEdit3 className="w-6 h-6" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Update Your Gardening Tip
          </h1>
          <p className="text-emerald-50/90 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Refine your unique gardening hack or helpful advice. Your updated insight will continue to help our green community grow better!
          </p>
        </div>

        {/* Input Form Fields */}
        <form onSubmit={handleUpdate} className="p-6 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Title Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <FiFileText className="text-emerald-500" /> Tip Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
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
                defaultValue={plantType}
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
                defaultValue={Images}
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
                {["easy", "medium", "hard"].map((lvl) => (
                  <label key={lvl} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/30 dark:bg-zinc-800/20 cursor-pointer hover:bg-gray-50 text-sm font-semibold capitalize text-gray-800 dark:text-zinc-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 dark:has-[:checked]:bg-emerald-950/20 dark:has-[:checked]:text-emerald-400 transition-all">
                    <input
                      type="radio"
                      name="level"
                      value={lvl}
                      defaultChecked={level === lvl}
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
                {["Composting", "Plant Care", "Vertical Gardening"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/30 dark:bg-zinc-800/20 cursor-pointer hover:bg-gray-50 text-sm font-semibold text-gray-800 dark:text-zinc-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 dark:has-[:checked]:bg-emerald-950/20 dark:has-[:checked]:text-emerald-400 transition-all">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      defaultChecked={category === cat}
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
                defaultValue={description}
                rows="4"
                placeholder="Provide a step-by-step guideline..."
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
                {["public", "hidden"].map((status) => (
                  <label key={status} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50/30 dark:bg-zinc-800/20 cursor-pointer hover:bg-gray-50 text-sm font-semibold capitalize text-gray-800 dark:text-zinc-200 has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 dark:has-[:checked]:bg-emerald-950/20 dark:has-[:checked]:text-emerald-400 transition-all">
                    <input
                      type="radio"
                      name="availability"
                      value={status}
                      defaultChecked={availability === status}
                      className="accent-emerald-600 w-4 h-4"
                    />
                    {status === "public" ? "🌍 Public (Visible to all)" : "🔒 Hidden (Private)"}
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Action Button Section */}
          <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/60">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-base rounded-2xl shadow-lg shadow-emerald-600/10 hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <FiCheckCircle className="w-5 h-5" /> Save and Update Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;