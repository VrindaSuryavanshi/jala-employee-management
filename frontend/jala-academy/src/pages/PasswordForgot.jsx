import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordForgot = () => {
  const [input, setInput] = useState("");

  const handleOnclick = () => {
    if (input !== "") {
      toast.error("Invalid Email...!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className=" w-full h-screen p-4  bg-fuchsia-200">
      <h4 className="text-center mb-4 font-bold text-2xl"> Magnus</h4>
      <hr />
      <form className="max-w-sm mt-10 mx-auto p-4 border-solid border-1 border-indigo-300 ">
        <p className="text-center mb-4">Forgot Password</p>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-1000 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <Link to={"/"}>
          <button type="button" class="btn btn-primary mr-2 text-white">
            Back
          </button>
        </Link>
        <button
          type="submit"
          onClick={handleOnclick}
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default PasswordForgot;
