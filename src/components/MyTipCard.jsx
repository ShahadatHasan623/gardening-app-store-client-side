import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyTipCard = ({ users, setUsers }) => {
  const handleDelete =(id)=>{
    console.log(id)
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-bold">View Your Submitted Garden Tip</h1>
          <p>
            Here you can see all the details of your gardening tip including the
            plant type, difficulty level, category, and availability. <br />{" "}
            Edit or manage your tip to help other garden lovers grow better!
          </p>
        </div>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-green-600 text-white text-left">
              <th className="py-3 px-4">No</th>
              <th className="py-3 px-4">image</th>
              <th className="py-3 px-4">title</th>
              <th className="py-3 px-4">Plant Type</th>
              <th className="py-3 px-4">Details</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {users.map((user, index) => (
              <tr className="hover:bg-green-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img className="h-20 w-20" src={user.Images} alt="" />
                </td>
                <td className="py-3 px-4">{user.title}</td>
                <td className="py-3 px-4">{user.plantType}</td>
                <td className="py-3 px-4">
                  <div className="join flex items-center gap-2">
                    <button className="btn join-item text-white bg-green-500"><FaEye /></button>
                    <button className="btn join-item text-white bg-green-500"><FaEdit /></button>
                    <button onClick={()=>handleDelete(user._id)} className="btn join-item text-white bg-green-500"> <MdDelete /> </button>
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
