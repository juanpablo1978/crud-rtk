import React, { useState } from "react";
import { IoCreateSharp } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//https://chatgpt.com/c/68c568ed-6ec8-8327-9503-c9adef78c50b
//https://academy.alkemy.org/curso/skill-up-react-i/contenidos/clase-2-validacion-del-formulario

const Login = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      setError("Fields cannot be empty");
      return;
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setError("You must enter a valid email address");
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      setError("Incorrect credentials");
      return;
    }
    axios
      .post("https://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const myToken = res.data.token;
        localStorage.setItem("token", myToken);
        navigate("/task-list");
      })
      .catch(() => {
        setError("Error trying to login");
      });
  };

  return (
    <main className="min-h-screen bg-slate-950 w-full p-8 ">
      <h1 className="text-[50px] font-bold text-center lg:text-[55px] text-white">
        CRUD
      </h1>
      <h2 className="text-[30px] font-bold text-center lg:text-[55px] text-gray-300">
        Redux Toolkit
      </h2>
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
            onSubmit={handleSubmit}
            className="w-[329px] h-[380px] md:w-[544px] md:h-[450px] bg-[#151a20] rounded-2xl
            flex flex-col justify-center items-center gap-y-7 md:gap-y-13"
          >
            <input
              type="email"
              name="email"
              className="w-[286px] h-[53px] md:w-[436px] md:h-[60px] bg-[#1d1f25] 
              rounded-4xl outline-none p-4 text-[20px] focus:bg-[#1d1f25] placeholder:text-gray-300"
              placeholder="challenge@alkemy.org"
            />
            <input
              type="password"
              name="password"
              className="w-[286px] h-[53px] md:w-[436px] md:h-[60px] bg-[#1d1f25]
               rounded-4xl outline-none p-4 text-[20px] focus:bg-[#1d1f25] placeholder:text-gray-300"
              placeholder="react"
            />
            <button
              type="submit"
              className="w-[240px] h-[53px] md:w-[400px] md:h-[60px] cursor-pointer
            rounded-4xl border-[1px] lg:h-[48px] border-purple-400 text-[22px]
            hover:text-gray-400 hover:border-purple-500 text-gray-300"
            >
              SUBMIT
            </button>
            {error && <p className="text-red-400 mt-4"> {error} </p>}
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
