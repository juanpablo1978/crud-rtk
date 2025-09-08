import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlices";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";


const TaskForm = () => {

  const [task, setTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
      dispatch(editTask({ ...task, id: params.id }))
    } else{
        dispatch(addTask({
      ...task,
      id: uuid()
    }));
    }

  
    navigate('/')
  };

useEffect(() => {
  if (params.id) {
    const taskFound = tasks.find(task => task.id === params.id);
    if (taskFound) {
      setTask({
        id: taskFound.id,
        title: taskFound.title,
        description: taskFound.description
      });
    }
  }
}, [params.id, tasks]);

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
      <button className="text-green-600 cursor-pointer" type="submit">SUBMIT</button>
    </form>
  );
};

export default TaskForm;
