import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlices";
import { Link } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
import { VscTasklist } from "react-icons/vsc";
import { TbTargetArrow } from "react-icons/tb";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <main className="p-6 pt-10 min-h-screen flex bg-black flex-col text-white">
      <header className="">
        {" "}
        <h3 className="text-gray-300 text-[30px] md:text-[40px] lg:text-[46px]
        md:text-center font-semibold pb-2">
          Good morning! Your tasks for today.
        </h3>
        <h4 className=" text-[22px] md:text-[28px] lg:text-[30px] text-gray-400 pb-10 md:pb-16 lg:pb-12
         md:text-center">
          Here’s what’s waiting for you.
        </h4>
        <div className="flex flex-wrap gap-6 md:justify-center">
          <div className="w-[153px] h-[110px] md:w-[180px] bg-[#151a20] rounded-xl p-4">
            <MdOutlineCreate className="w-[45px] h-[45px] bg-violet-200/50 text-violet-800 rounded-md mb-2" />{" "}
            <Link
              className="text-gray-400 text-[23px] font-normal"
              to={"task-form"}
            >
              Create Task
            </Link>
          </div>
          <div className="w-[155px] h-[110px] md:w-[180px] bg-[#151a20] rounded-xl p-4">
            <VscTasklist className="w-[45px] h-[45px] bg-yellow-200/50 text-yellow-200 rounded-md mb-2 " />
            <h4 className="text-gray-400 text-[23px] font-normal">
              Your Tasks <span className="text-gray-200">{tasks.length}</span>{" "}
            </h4>
          </div>
          <div className="w-[153px] h-[110px] md:w-[180px] bg-[#151a20] rounded-xl p-4">
            <h4 className="text-gray-400 text-[23px] font-normal">
              <TbTargetArrow className="w-[45px] h-[45px] bg-pink-200/50 text-pink-800 rounded-md mb-2 " />
              <h4 className="text-gray-400 text-[23px] font-normal">Focused</h4>
            </h4>
          </div>
        </div>
      </header>
      <article className="flex flex-wrap gap-3 md:gap-5 pt-11 md:pt-20 lg:pt-12 md:justify-center">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="w-[330px] h-[340px] md:h-[367px] bg-[#151a20] rounded-xl relative"
          >
            <h3 className="w-full h-[55px] bg-[#1c2025] font-bold rounded-t-xl p-2 text-gray-400 text-[20px]">
              {task.title}
            </h3>
            <p className="p-3 text-[18px] md:text-[19px]">{task.description}</p>
            <div className="absolute bottom-4 right-14">
              <button
                className="text-red-600 cursor-pointer mr-5
                rounded-2xl
              w-[70px] h-[30px] border-[1px] border-red-600"
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                DELETE
              </button>
              <button
                className="cursor-pointer text-green-600 rounded-2xl
              w-[70px] h-[30px] border-[1px] border-green-600"
              >
                <Link to={`/edit-task/${task.id}`} className="">
                  EDIT
                </Link>
              </button>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default TaskList;
