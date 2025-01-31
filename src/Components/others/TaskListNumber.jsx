import React from "react";

const TaskListNumber = () => {
  return (
    <div className=" bg-[#1C1C1C] flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold bg-red-400">0</h2>
        <h3 className="text-xl font-medium bg-red-400">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold bg-blue-400">0</h2>
        <h3 className="text-xl font-medium bg-blue-400">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold bg-green-400">0</h2>
        <h3 className="text-xl font-medium bg-green-400">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold bg-yellow-400">0</h2>
        <h3 className="text-xl font-medium bg-yellow-400">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
