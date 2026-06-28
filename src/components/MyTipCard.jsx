import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTipCard = ({ users = [], setUsers }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10b981", // Emerald 500
      cancelButtonColor: "#ef4444", // Red 500
      confirmButtonText: "Yes, delete it!",
      background: document.documentElement.classList.contains("dark") ? "#18181b" : "#ffffff",
      color: document.documentElement.classList.contains("dark") ? "#f4f4f5" : "#1f2937",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://gardening-store-server.vercel.app/garden/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              const remaininguser = users.filter((user) => user._id !== id);
              setUsers(remaininguser);
              Swal.fire({
                title: "Deleted!",
                text: "Your tip has been deleted.",
                icon: "success",
                background: document.documentElement.classList.contains("dark") ? "#18181b" : "#ffffff",
                color: document.documentElement.classList.contains("dark") ? "#f4f4f5" : "#1f2937",
                confirmButtonColor: "#10b981",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-12">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30 uppercase tracking-wider">
          Dashboard
        </span>
        <h1 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-gray-50">
          My Gardening Tips — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300">Simple & Effective</span>
        </h1>
        <p className="text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Discover easy and practical gardening tips from personal experience! Learn how to plant, care for, and protect your garden naturally.
        </p>
      </div>

      {/* Table Container */}
      <div className="w-full overflow-hidden bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl shadow-xl dark:shadow-emerald-950/10 border border-gray-100 dark:border-zinc-800">
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full text-sm text-left border-collapse">
            {/* Table Head */}
            <thead className="bg-gray-50/70 dark:bg-zinc-800/50 border-b border-gray-100 dark:border-zinc-800 text-xs uppercase tracking-wider text-gray-500 dark:text-zinc-400 font-semibold">
              <tr>
                <th className="py-4 px-6 text-center w-16">No</th>
                <th className="py-4 px-6">Image</th>
                <th className="py-4 px-6">Title</th>
                <th className="py-4 px-6">Plant Type</th>
                <th className="py-4 px-6 text-right pr-10">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800 text-gray-700 dark:text-zinc-300">
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-emerald-50/30 dark:hover:bg-zinc-800/40 transition-colors duration-200"
                >
                  <td className="py-4 px-6 text-center font-medium text-gray-400 dark:text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="py-4 px-6">
                    <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-gray-100 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shadow-sm group-hover:scale-105 transition-transform duration-200">
                      <img
                        src={user.Images || "https://via.placeholder.com/100"}
                        alt={user.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </td>
                  {/* Title with overflow protection */}
                  <td className="py-4 px-6 font-semibold text-gray-950 dark:text-gray-100 max-w-[220px]">
                    <p className="truncate" title={user.title}>{user.title}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400 text-xs font-bold border border-gray-100 dark:border-zinc-700/60 uppercase tracking-wider">
                      {user.plantType}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right pr-8">
                    <div className="inline-flex items-center gap-2">
                      {/* Edit Link Button */}
                      <Link
                        to={`/dashboard/update/${user._id}`}
                        className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950/40 dark:text-emerald-400 dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-200 shadow-sm"
                        title="Edit Tip"
                      >
                        <FaEdit className="text-sm" />
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="p-2.5 rounded-xl bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white dark:bg-rose-950/40 dark:text-rose-400 dark:hover:bg-rose-500 dark:hover:text-white transition-all duration-200 shadow-sm"
                        title="Delete Tip"
                      >
                        <MdDelete className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {users.length === 0 && (
          <div className="text-center py-12 space-y-2">
            <p className="text-base font-medium text-gray-500 dark:text-zinc-400">
              No tips found active.
            </p>
            <p className="text-xs text-gray-400 dark:text-zinc-500">
              Start adding your creative gardening tips to see them here!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTipCard;