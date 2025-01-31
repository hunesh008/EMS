import React from "react";
import Header from "../others/Header";

const AdminDashboard = () => {
  return (
    <div className="bg-[#1c1c1c] h-screen w-full p-10">
      <Header />
      <div className="flex justify-center items-center h-3/4 m-14">
      <form className="m-5 p-6 border border-gray-300 shadow-lg bg-zinc-800 rounded-lg flex flex-wrap w-3/4 justify-evenly">
        <div className="w-1/2 p-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Title Task</label>
            <input
              className="w-full border border-gray-300 h-10 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type=""
              placeholder="Make a YouTube Video"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Date</label>
            <input
              className="w-full border border-gray-300 h-10 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Assign To</label>
            <input
              className="w-full border border-gray-300 h-10 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Emp Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Category</label>
            <input
              className="w-full border border-gray-300 h-10 rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="w-1/2 p-4 flex flex-col">
          <label className="block text-gray-700 font-semibold mb-1">Description</label>
          <textarea
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Enter task details..."
          ></textarea>
          <button
            className="mt-4 bg-green-600 text-white font-semibold h-10 w-full rounded-lg shadow-md hover:bg-green-700 transition duration-200"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AdminDashboard;
