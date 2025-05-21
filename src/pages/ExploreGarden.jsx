import React from "react";

const ExploreGarden = () => {
  return (
    <div className="max-w-6xl min-h-[calc(100vh-117px)] mx-auto py-12">
      <div className="p-10 bg-gradient-to-r from-purple-400 to-green-500 rounded-2xl shadow-xl">
        <div className="text-center space-y-2 mb-10">
          <h1 className="text-3xl font-bold text-green-800">
            Gardener Info Form
          </h1>
        </div>
        <form className="space-y-8">
          <div className="grid grid-cols-1 gap-6">
            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">
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
              <label className="block text-sm font-semibold mb-1">Age</label>
              <input
                type="number"
                name="age"
                className="input input-bordered w-full"
                placeholder="Enter Your age"
              />
            </fieldset>

            <fieldset className="bg-white rounded-xl border p-4 shadow">
              <label className="block text-sm font-semibold mb-1">
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
              <label className="block text-sm font-semibold mb-1">
                Experience
              </label>
              <textarea
                rows="3"
                name="experience"
                placeholder="Describe experience..."
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </fieldset>
            <fieldset className="bg-white rounded-xl border p-4 shadow lg:col-span-1">
              <label className="block text-sm font-semibold mb-1">
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
              <label className="block text-sm font-semibold mb-2">Status</label>
              <div className="space-x-4">
                <label>
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    className="mr-1"
                  />{" "}
                  Active
                </label>
                <label>
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
            <input
              type="submit"
              value="Submit"
              className="btn btn-success w-full text-white text-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExploreGarden;
