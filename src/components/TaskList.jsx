import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlices";


const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  };

  return (
    <article className="text-white">
      {tasks?.map((task) => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button
            className="text-red-600"
            onClick={() => {
              handleDelete(task.id)
            }}
          >
            DELETE
          </button>
        </div>
      ))}
    </article>
  );
};

export default TaskList;
