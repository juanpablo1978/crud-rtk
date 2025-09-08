import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlices";
import { Link } from "react-router-dom";


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <article className="text-white flex flex-col gap-y-3">
      <header className="text-amber-300"> <h3 className="text-amber-300">TASKS: {tasks.length}</h3>
      <Link to={'task-form'}>CREATE TASK</Link>  </header>
      {tasks?.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button
            className="text-red-600 cursor-pointer mr-5"
            onClick={() => {
              handleDelete(task.id)
            }}
          >
            DELETE
          </button>
          <Link to={`/edit-task/${task.id}`} className="cursor-pointer text-blue-400">EDIT</Link>
        </div>
      ))}
    </article>
  );
};

export default TaskList;
