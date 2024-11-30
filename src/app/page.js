import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen p-5">
      <main className="flex flex-col w-full items-center">
        <div className="">
          <h1 className="text-2xl font-bold ">To-Do List</h1>
        </div>
        <div className="w-[30rem] bg-[#F3F4F6] rounded-3xl h-max p-5">
          <div className="bg-white text-gray-500 flex items-center rounded-r-full">
            <div className="p-2">
              <h1>Add a new task</h1>
            </div>
            <div className="ml-auto">
              <button className="text-white text-base bg-black p-2 rounded-l-xl transition-all duration-200 ease-in-out
                hover:width-1/2 hover:bg-gray-800 hover:rounded-3xl hover:shadow-lg
              ">Add a Task</button>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
