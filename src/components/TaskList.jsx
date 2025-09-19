import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlices";
import { Link } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const [search, setSearch] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();


  //persistencia
    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const filterTask = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <main className="p-6 pt-10 min-h-screen flex bg-slate-950 flex-col text-white">
       <Logout />
      <header className="">
       
        <h3
          className="text-gray-300 text-[30px] md:text-[40px] lg:text-[46px]
        md:text-center font-semibold pb-2"
        >
          Good morning! Your tasks for today.
        </h3>
        <h4
          className=" text-[22px] md:text-[28px] lg:text-[30px] text-gray-400 pb-10 md:pb-16 lg:pb-12
         md:text-center"
        >
          Here’s what’s waiting for you.
        </h4>

        <div className="flex flex-wrap gap-6 md:justify-center">
          <div className="w-[153px] h-[110px] md:w-[180px] bg-[#151a20] rounded-xl p-4">
            <MdOutlineCreate className="w-[40px] h-[40px] bg-purple-200/50 text-purple-400 rounded-md mb-2 p-2" />{" "}
            <Link
              className="text-gray-400 text-[23px] font-normal"
              to={"/task-form"}
            >
              Create Task
            </Link>
          </div>
          <div className="w-[165px] h-[110px] md:w-[180px] bg-[#151a20] rounded-xl p-4">
            <VscTasklist className="w-[40px] h-[40px] bg-yellow-200/50 text-yellow-200 rounded-md mb-2 p-2" />
            <h4 className="text-gray-400 text-[20px] lg:text-[23px] md:text-[23px] font-normal flex gap-x-3">
              Your Tasks{" "}
              <div
                className="text-gray-200 bg-gray-100/50 rounded-full w-[30px] h-[30px] flex
              justify-center items-center"
              >
                {tasks.length}
              </div>{" "}
            </h4>
          </div>
          <div className="w-[344px] h-[110px] md:w-[270px] bg-[#151a20] rounded-xl p-4">
            <h4 className="text-gray-400 text-[23px] font-normal">
              <FaSearch className="w-[40px] h-[40px] bg-pink-200/50 text-pink-300 rounded-md mb-2 p-2" />
              <input
                value={search}
                onChange={handleInput}
                placeholder="Search for title..."
                className="text-gray-400 text-[23px] font-normal outline-none w-[300px] md:w-[240px]"
              />
            </h4>
          </div>
        </div>
      </header>
      <article className="flex flex-wrap gap-3 md:gap-5 pt-11 md:pt-20 lg:pt-12 md:justify-center">
        {filterTask.length > 0 ? (
          filterTask?.map((task) => (
            <TaskCard task={task} key={task.id} handleDelete={handleDelete} />
          ))
        ) : (
          <h4>No hay coincidencias</h4>
        )}
      </article>
    </main>
  );
};

export default TaskList;
