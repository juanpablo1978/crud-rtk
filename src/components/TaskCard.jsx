import React from 'react'
import { Link } from 'react-router-dom';

const TaskCard = ({task, handleDelete}) => {
  return (
   
          <div
            className="w-[330px] h-[340px] md:h-[367px] bg-[#151a20] rounded-xl relative"
          >
            <h3 className="w-full h-[55px] bg-[#1c2025] font-bold rounded-t-xl p-2 text-gray-400 text-[20px]">
              {task.title}
            </h3>
            <p className="p-3 text-[18px] md:text-[19px] lg:font-thin">
              {task.description}
            </p>
            <div className="absolute bottom-4 right-14">
              <button
                className="text-purple-400 hover:text-purple-300 cursor-pointer mr-5
                rounded-2xl
              w-[70px] h-[30px] border-[1px] border-purple-400 hover:border-purple-300"
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                DELETE
              </button>
              <button
                className="cursor-pointer text-yellow-300 rounded-2xl hover:text-yellow-200
              w-[70px] h-[30px] border-[1px] border-yellow-300 hover:border-yellow-200"
              >
                <Link to={`/edit-task/${task.id}`} className="">
                  EDIT
                </Link>
              </button>
            </div>
          </div>
  )
}

export default TaskCard