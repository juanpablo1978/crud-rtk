import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlices";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTask({ ...task, id: params.id }));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/task-list");
  };

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setTask({
          id: taskFound.id,
          title: taskFound.title,
          description: taskFound.description,
        });
      }
    }
  }, [params.id, tasks]);

  return (
    <main className="p-6 pt-10 min-h-screen flex bg-slate-950 flex-col text-white justify-center items-center">
      <span className="pb-6 lg:pb-2 text-amber-300 text-[40px] md:text-[45px]"><TfiWrite/></span> 
      <h3
        className="text-gray-300 text-[30px] md:text-[49px] lg:text-[46px] text-center
         font-semibold pb-2 lg:pb-0"
      >
     Add or modify your task
      </h3>
      <h4
        className=" text-[22px] md:text-[32px] lg:text-[30px] text-gray-400 pb-10 md:pb-16 lg:pb-2
        text-center"
      >
        Make changes and save when you’re ready 
      </h4>
      <form
        onSubmit={handleSubmit}
        className="w-[280px] h-[330px] md:w-[400px] md:h-[550px] flex flex-col
     justify-center items-center gap-y-3"
      >
        <input
          placeholder="Title"
          value={task.title}
          type="text"
          name="title"
          onChange={handleChange}
          className="w-[270px] h-[50px] md:w-[360px] md:h-[70px] md:text-[25px]
           bg-[#151a20] p-2 text-[22px] rounded-xl"
        />
        <textarea
          placeholder="Description"
          value={task.description}
          name="description"
          onChange={handleChange}
          className="w-[270px] h-[280px] md:w-[360px] md:h-[380px] md:text-[25px] lg:h-[300px]
           bg-[#151a20] outline-none p-2 text-[22px] rounded-xl"
        ></textarea>
        <button
          className="text-purple-400 hover:text-purple-300 cursor-pointer mr-5
                rounded-2xl text-[22px] mt-3 md:text-[28px] md:w-[210px]
              w-[160px] h-[50px] border-[1px] border-purple-400 hover:border-purple-300"
        >
          SAVE
        </button>
      </form>
    </main>
  );
};

export default TaskForm;
