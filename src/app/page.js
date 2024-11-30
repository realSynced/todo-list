'use client'

import { useState, useEffect } from "react";

export default function Home() {
  const [taskInput, setTaskInput] = useState('');
  const [firstTime, setFirstTime] = useState(true);
  const [tasks, setTasks] = useState(['Example 1', 'Example 2', 'Example 3']);
  const [name, setName] = useState('')

  const addTask = (e) => {
    e.preventDefault();
    if (firstTime && taskInput.trim() !== '') {
      setTaskInput('');
      setTasks([]); // clear examples
      setTasks([...tasks, taskInput.trim()]);
      setFirstTime(false);
    } else if (firstTime && taskInput.trim() === '') {
      alert('Please enter a task before submitting!');
      return;
    }

    if(!firstTime && taskInput.trim() !== '') {
      setTaskInput('');
      setTasks([...tasks, taskInput.trim()]);
    } else if(!firstTime && taskInput.trim() === '') {
      alert('Please enter a task before submitting!');
      return;
    }
  }

  useEffect(() => {
    
    if(localStorage.getItem('name') !== null && localStorage.getItem('name') !== '' && localStorage.getItem('name').trim() !== ''){
      setName(localStorage.getItem('name'));
      return;
    } else {
      let usersName = prompt('Please enter your name');
      setName(usersName);
      localStorage.setItem('name', usersName);
    }

  })


  return (
    <div className="flex justify-center w-full min-h-screen p-5">
      <div className="w-max">
        <h1 className="text-2xl font-bold">Hello, {name}!</h1>
      </div>
      <main className="flex flex-col w-full items-center">
        <div className="mb-2">
          <h1 className="text-2xl font-bold ">To-Do List</h1>
        </div>
        <div className="w-[30rem] bg-lightgray rounded-3xl h-max p-5">
          <div className="bg-white text-gray-500 rounded-r-full">
            <form onSubmit={addTask} className="flex items-center">
              <div className="p-2">
                <input
                  type="text"
                  name="task_input"
                  placeholder="Add a new task"
                  className=" focus:outline-lightgray w-72 p-2 rounded-xl"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}

                  />
              </div>
              <div className="ml-auto">
                <button type="submit" className="h-full p-3  text-white text-base bg-black rounded-l-xl hover hover:bg-gray-800 hover:rounded-3xl hover:shadow-lg transition-all duration-200 ease-in-out">
                  Add Task
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5">
            <ul className="flex flex-col space-y-4">
              {tasks.map((task, index) => {
                return (
                  <li key={index} className="bg-white text-gray-500 flex items-center rounded-r-full">
                    <div className="p-2">
                      <h1>{task}</h1>
                    </div>
                    <div className="ml-auto">
                      <button onClick={() => setTasks(tasks.filter((_, i) => i !== index))} className="text-white text-base bg-black p-2 rounded-l-xl transition-all duration-200 ease-in-out
                        hover:bg-gray-800
                      ">Delete</button>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>

    </div>
  );
}
