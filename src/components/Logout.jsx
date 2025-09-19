import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <button
      className="text-fuchsia-600 cursor-pointer text-[18px] border-[1px] w-[110px] h-[40px] 
     border-fuchsia-600 rounded-2xl mb-4 hover:text-fuchsia-500 hover:border-fuchsia-500"
      onClick={handleLogout}
    >
      LOGOUT
    </button>
  );
};

export default Logout;
