import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const updateUser = useLoaderData();
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
    console.log(updateGarden);
    fetch(`https://gardening-store-server.vercel.app/garden/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateGarden),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been Updated SuccessFully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myTip");
        }
      });
  };
  return (
    <div className="max-w-6xl min-h-[calc(100vh-117px)] mx-auto py-12">
      <div className="p-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-2xl shadow-xl">
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-3xl font-bold text-green-800">
            Update Your Favorite Gardening Tip!
          </h1>
          <p>
            Have a unique gardening hack or helpful advice? Share your tips with
            our community of garden lovers! Whether it’s about composting, plant
            care, or vertical gardening, your experience can help others grow
            better gardens.
          </p>
        </div>
        <form onSubmit={handleUpdate} className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="input input-bordered w-full"
                placeholder="Enter title"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">
                Plant Type
              </label>
              <input
                type="text"
                name="plantType"
                defaultValue={plantType}
                className="input input-bordered w-full"
                placeholder="Enter plant type"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="Images"
                defaultValue={Images}
                className="input input-bordered w-full"
                placeholder="Enter image URL"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2">
                Difficulty Level
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    defaultChecked={level === "easy"}
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
                    defaultChecked={level === "medium"}
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
                    defaultChecked={level === "hard"}
                    value="hard"
                    className="mr-1"
                  />{" "}
                  Hard
                </label>
              </div>
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2">
                Category
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    defaultChecked={category === "Composting"}
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
                    defaultChecked={category === "Plant Care"}
                    value="Plant Care"
                    className="mr-1"
                  />{" "}
                  Plant Care
                </label>
                <label>
                  <input
                    type="radio"
                    name="category"
                    defaultChecked={category === "Vertical Gardening"}
                    value="Vertical Gardening"
                    className="mr-1"
                  />{" "}
                  Vertical Gardening
                </label>
              </div>
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow lg:col-span-1">
              <label className="block text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                rows="5"
                className="textarea textarea-bordered w-full"
                placeholder="Write your tip..."
              ></textarea>
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-2">
                Availability
              </label>
              <div className="space-x-4">
                <label>
                  <input
                    defaultChecked={availability === "public"}
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
                    defaultChecked={availability === "hidden"}
                    value="hidden"
                    className="mr-1"
                  />{" "}
                  Hidden
                </label>
              </div>
            </fieldset>
          </div>

          <div>
            <input
              type="submit"
              value="Update Tip"
              className="btn btn-success w-full text-white text-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
