import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ExploreGarden = () => {
  const navigate =useNavigate()
  const handleExplore = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const gardenersUser = Object.fromEntries(formData.entries());
    console.log(gardenersUser);

    fetch("https://gardening-store-server.vercel.app/gardeners", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gardenersUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate('/')
        }
      });
  };
  return (
    <div className="max-w-6xl min-h-[calc(100vh-117px)] mx-auto py-12">
      <div className="p-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-2xl shadow-xl">
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-3xl font-bold text-green-800">
            Gardener Info Form
          </h1>
        </div>
        <form onSubmit={handleExplore} className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1 text-black">
                Gardener's Name
              </label>
              <input
                type="text"
                name="name"
                className="input input-bordered w-full"
                placeholder="Enter Name"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1 text-black">Age</label>
              <input
                type="number"
                name="age"
                className="input input-bordered w-full"
                placeholder="Enter Your age"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1 text-black">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                className="input input-bordered w-full"
                placeholder="Enter image URL"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow lg:col-span-1">
              <label className="block text-sm font-semibold mb-1 text-black">
                Experience
              </label>
              <textarea
                rows="3"
                name="experience"
                placeholder="Describe experience..."
                className="w-full px-4 py-2 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </fieldset>
            <fieldset className="bg-white rounded-xl border p-4 shadow lg:col-span-1">
              <label className="block text-sm font-medium text-black">
                Other Info
              </label>
              <textarea
                name="otherInfo"
                rows="3"
                className="mt-1 block w-full px-4 py-2 border-2 focus:ring-2 border-gray-300 rounded-md text-gray-800  focus:ring-green-400"
                placeholder="Any other relevant information..."
              ></textarea>
            </fieldset>
            <fieldset className="bg-white rounded-xl border p-4 shadow lg:col-span-1">
              <label className="block text-sm font-semibold mb-1 text-black">
                Total Shared Tips
              </label>
              <input
                type="number"
                name="total"
                placeholder="0"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2 text-black">Gender</label>
              <div className="space-x-4">
                <label className="text-black">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="mr-1"
                  />{" "}
                  Male
                </label>
                <label className="text-black">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="mr-1"
                  />{" "}
                  Female
                </label>
              </div>
            </fieldset>
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2 text-black">Status</label>
              <div className="space-x-4">
                <label className="text-black">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    className="mr-1"
                  />{" "}
                  Active
                </label>
                <label className="text-black">
                  <input
                    type="radio"
                    name="status"
                    value="inactive"
                    className="mr-1"
                  />{" "}
                  InActive
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <button  type="submit" className="btn btn-success w-full text-white text-lg">Add Explore</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExploreGarden;
