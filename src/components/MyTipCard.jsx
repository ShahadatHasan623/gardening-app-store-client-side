import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTipCard = ({ users, setUsers }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto mx-auto px-4">
      <div className="text-center space-y-3 mb-12">
        <h1 className="lg:text-3xl text-2xl font-bold text-green-700 ">My Gardening Tip – Simple & Effective Ideas</h1>
        <p>
          Discover easy and practical gardening tips from personal experience! <br />
          Learn how to plant, care for,  and protect your garden 
          naturally—perfect <br /> for beginners and home gardeners.
        </p>
      </div>
      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
        <table className="min-w-[700px] w-full text-sm text-left text-gray-700">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Plant Type</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => user.email === user.email)
              .map((user, index) => (
                <tr
                  key={user._id}
                  className="border-t border-gray-200 hover:bg-green-50 transition"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">
                    <img
                      src={user.Images || "https://via.placeholder.com/100"}
                      alt={user.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{user.title}</td>
                  <td className="py-3 px-4">{user.plantType}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/dashboard/update/${user._id}`}
                        className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
                      >
                        <FaEdit className="text-lg" />
                      </Link>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                      >
                        <MdDelete className="text-lg" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {users.length === 0 && (
          <p className="text-center py-4 text-gray-500">
            No tips found for this level.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTipCard;
