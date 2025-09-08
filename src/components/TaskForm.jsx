import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlices";
import { v4 as uuid } from "uuid";

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      id: uuid()
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[280px] h-[330px] flex flex-col
     justify-center items-center gap-y-3"
    >
      <input
        value={task.title}
        type="text"
        name="title"
        onChange={handleChange}
        className="w-[270px] h-[50px] border-[1px] border-white outline-none p-2"
      />
      <textarea
        value={task.description}
        name="description"
        onChange={handleChange}
        className="w-[270px] h-[280px] border-[1px] border-white outline-none p-2"
      ></textarea>
      <button className="text-green-600 cursor-pointer">SUBMIT</button>
    </form>
  );
};

export default TaskForm;
