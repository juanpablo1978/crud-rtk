import React from "react";
import { IoCreateSharp } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Login = () => {
  return (
    <main className="min-h-screen bg-black w-full p-8 ">
      <h1 className="text-[50px] font-bold text-center lg:text-[55px]">CRUD</h1>
      <section className="flex flex-col justify-center items-center">
        <article className="flex gap-x-6 pt-11">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <IoCreateSharp className="text-amber-300 text-[28px]" />
            <h3 className="text-gray-400 font-medium">CREATE</h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <FaBookOpenReader className="text-purple-400 text-[28px]" />
            <h3 className="text-gray-400 font-medium">READ</h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <GrUpdate className="text-gray-300 text-[28px]" />
            <h3 className="text-gray-400 font-medium">UPDATE</h3>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <MdDelete className="text-blue-300 text-[28px]" />
            <h3 className="text-gray-400 font-medium">DELETE</h3>
          </div>
        </article>
        <article className="pt-12 md:pt-20 lg:pt-12">
          <form
            className="w-[329px] h-[380px] md:w-[544px] md:h-[450px] bg-[#151a20] rounded-2xl
            flex flex-col justify-center items-center gap-y-7 md:gap-y-13"
          >
            <input
              type="text"
              className="w-[286px] h-[53px] md:w-[436px] md:h-[60px] bg-[#1d1f25] 
              rounded-4xl outline-none p-4 text-[20px]"
              placeholder="email@gmail.com"
            />
            <input
              type="text"
              className="w-[286px] h-[53px] md:w-[436px] md:h-[60px] bg-[#1d1f25]
               rounded-4xl outline-none p-4 text-[20px]"
              placeholder="Password"
            />
            <button className="w-[240px] h-[53px] md:w-[400px] md:h-[60px] cursor-pointer
            rounded-4xl border-[1px] lg:h-[48px] border-purple-400 text-[22px]
            hover:text-gray-400 hover:border-purple-500">
              SUBMIT
            </button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
