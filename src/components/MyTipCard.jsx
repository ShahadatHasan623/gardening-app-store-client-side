import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete, MdJavascript } from "react-icons/md";
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
        fetch(`http://localhost:3000/garden/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaininguser = users.filter((userId) => userId._id !== id);
              setUsers(remaininguser);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto mx-auto px-4">

      <div className="text-center mb-8 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700">
          View Your Submitted Garden Tip
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Here you can see all the details of your gardening tip including the
          plant type, difficulty level, category, and availability. <br />
          Edit or manage your tip to help other garden lovers grow better!
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
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-t border-gray-200 hover:bg-green-50 transition"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={user.Images}
                    alt={user.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-4">{user.title}</td>
                <td className="py-3 px-4">{user.plantType}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <Link to={`/update/${user._id}`}  className="btn btn-sm bg-green-500 text-white hover:bg-green-600">
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
      </div>
    </div>
  );
};

export default MyTipCard;
