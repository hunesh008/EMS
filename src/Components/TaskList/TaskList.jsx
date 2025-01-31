import React from "react";

const TaskList = () => {
  return (
    <div id="tasklist" className=" overflow-x-auto  h-[55%] bg-[#1c1c1c] py-2 mt-14 gap-3 flex items-center justify-start flex-nowrap">
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl ">
        <div className=" bg-red-400 flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded font-semibold ">High</h3>
          <h4 className="bg-red-400" >20 feb 2024</h4>
        </div>
        <h2 className="  bg-red-400 mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className=" bg-red-400 text-sm mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tenetur nemo deserunt rerum? Harum, blanditiis.</p>
      </div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl ">
        <div className=" bg-green-400 flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded font-semibold ">High</h3>
          <h4 className="bg-green-400" >20 feb 2024</h4>
        </div>
        <h2 className="  bg-green-400 mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className=" bg-green-400 text-sm mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tenetur nemo deserunt rerum? Harum, blanditiis.</p>
      </div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl ">
        <div className=" bg-blue-400 flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded font-semibold ">High</h3>
          <h4 className="bg-blue-400" >20 feb 2024</h4>
        </div>
        <h2 className="  bg-blue-400 mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className=" bg-blue-400 text-sm mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tenetur nemo deserunt rerum? Harum, blanditiis.</p>
      </div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl ">
        <div className=" bg-yellow-400 flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded font-semibold ">High</h3>
          <h4 className="bg-yellow-400" >20 feb 2024</h4>
        </div>
        <h2 className="  bg-yellow-400 mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className=" bg-yellow-400 text-sm mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tenetur nemo deserunt rerum? Harum, blanditiis.</p>
      </div>
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-zinc-400 rounded-xl ">
        <div className=" bg-zinc-400 flex justify-between items-center ">
          <h3 className="bg-red-600 px-3 py-1 rounded font-semibold ">High</h3>
          <h4 className="bg-zinc-400" >20 feb 2024</h4>
        </div>
        <h2 className="  bg-zinc-400 mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className=" bg-zinc-400 text-sm mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe tenetur nemo deserunt rerum? Harum, blanditiis.</p>
      </div>
      
    </div>
  );
};

export default TaskList;
