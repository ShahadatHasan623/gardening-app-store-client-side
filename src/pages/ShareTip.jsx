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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Data Add successFully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log("after the getting db", data);
        form.reset();
      });
  };
  return (
    <div className="max-w-6xl min-h-[calc(100vh-117px)] mx-auto py-8 ">
      <div className="p-24 space-y-5 bg-gradient-to-r from-purple-400 to-green-500 mx-auto rounded-2xl">
        <form onSubmit={handleShareTip} className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Title </label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Title "
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Plant Type</label>
              <input
                type="text"
                className="input w-full"
                name="Plant Type"
                placeholder="Plant Type"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Images</label>
              <input
                type="text"
                className="input w-full"
                name="Images"
                placeholder="Images Url"
              />
            </fieldset>
            <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Difficulty Level :</label>
              <input className="mx-2" type="radio" name="level" value="easy" />
              <label htmlFor="male">Easy</label>

              <input
                className="mx-2"
                type="radio"
                name="level"
                value="medium"
              />
              <label htmlFor="male">Medium</label>

              <input className="mx-2" type="radio" name="level" value="hard" />
              <label htmlFor="male">Hard</label>
            </fieldset>
            <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Category :</label>
              <input
                className="mx-2"
                type="radio"
                name="category"
                value="Composting"
              />
              <label htmlFor="male">Composting</label>

              <input
                className="mx-2"
                type="radio"
                name="category"
                value="Plant Care"
              />
              <label htmlFor="male">Plant Care</label>

              <input
                className="mx-2"
                type="radio"
                name="category"
                value="Vertical Gardening"
              />
              <label htmlFor="male">Vertical Gardening</label>
            </fieldset>
            <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
              <label htmlFor="description">Description</label>
              <br />
              <textarea
                name="description"
                className="border-1 border-gray-400 rounded-xl w-full p-3"
                id=""
                rows="5"
              ></textarea>
            </fieldset>
            <fieldset className="bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Availability :</label>
              <input
                className="mx-2"
                type="radio"
                name="availability"
                value="public"
              />
              <label htmlFor="active">public</label>

              <input
                className="mx-2"
                type="radio"
                name="availability"
                value="hidden"
              />
              <label htmlFor="Hidden">hidden</label>
            </fieldset>
          </div>
          <input type="submit" className="btn w-full" value="Add User" />
        </form>
      </div>
    </div>
  );
};

export default ShareTip;
