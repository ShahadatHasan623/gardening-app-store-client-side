import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const ShareTip = () => {
  const { user } = use(AuthContext);
  const handleShareTip = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = user?.name;
    const formData = new FormData(form);
    const { ...userData } = Object.fromEntries(formData.entries());
    const data = {
      name,
      email,
      ...userData,
    };
    fetch("http://localhost:3000/garden", {
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
            position: "top-end",
            icon: "success",
            title: "Data Add successFully",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("after the getting db", data);
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-6xl min-h-[calc(100vh-117px)] mx-auto py-8">
      <div className="p-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-2xl shadow-xl">
        <form onSubmit={handleShareTip} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Title */}
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                placeholder="Enter title"
              />
            </fieldset>

            {/* Plant Type */}
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">
                Plant Type
              </label>
              <input
                type="text"
                name="plantType"
                className="input input-bordered w-full"
                placeholder="Enter plant type"
              />
            </fieldset>

            {/* Image URL */}
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="Images"
                className="input input-bordered w-full"
                placeholder="Enter image URL"
              />
            </fieldset>

            {/* Difficulty Level */}
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2">
                Difficulty Level
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="level"
                    value="easy"
                    className="mr-1"
                  />{" "}
                  Easy
                </label>
                <label>
                  <input
                    type="radio"
                    name="level"
                    value="medium"
                    className="mr-1"
                  />{" "}
                  Medium
                </label>
                <label>
                  <input
                    type="radio"
                    name="level"
                    value="hard"
                    className="mr-1"
                  />{" "}
                  Hard
                </label>
              </div>
            </fieldset>

            {/* Category */}
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2">
                Category
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="Composting"
                    className="mr-1"
                  />{" "}
                  Composting
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="Plant Care"
                    className="mr-1"
                  />{" "}
                  Plant Care
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value="Vertical Gardening"
                    className="mr-1"
                  />{" "}
                  Vertical Gardening
                </label>
              </div>
            </fieldset>

            {/* Description */}
            <fieldset className="bg-white rounded-xl border p-4 shadow lg:col-span-1">
              <label className="block text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="5"
                className="textarea textarea-bordered w-full"
                placeholder="Write your tip..."
              ></textarea>
            </fieldset>

            {/* Availability */}
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2">
                Availability
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value="public"
                    className="mr-1"
                  />{" "}
                  Public
                </label>
                <label>
                  <input
                    type="radio"
                    name="availability"
                    value="hidden"
                    className="mr-1"
                  />{" "}
                  Hidden
                </label>
              </div>
            </fieldset>
          </div>

          {/* Submit Button */}
          <div>
            <input
              type="submit"
              value="Add Tip"
              className="btn btn-success w-full text-white text-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTip;
