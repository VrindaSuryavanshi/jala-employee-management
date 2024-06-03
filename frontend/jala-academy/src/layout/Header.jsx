import React, { useContext } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import { AppContext } from "./contex/AppContex";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../pages/home/home.css";

const Header = ({ logoutFn }) => {
  const { appData, setAppData } = useContext(AppContext);

  return (
    <div className="w-full shrink-0 h-[55px] flex justify-between bg-gray-800 border-b border-b-[#888]">
      <div className="w-full h-[55px] bg-gray-800  py-3 text-white border-b border-b-[#888] flex flex-row">
        <button
          onClick={() => {
            setAppData({ sidebarVisible: !appData.sidebarVisible });
          }}
          className="mr-4"
        >
          <RiMenuFoldLine
            className={`${
              appData.sidebarVisible ? "ml-6" : "ml-6"
            } aitems-center`}
          />
        </button>
        <span className="ml-16  text-xl font-bold mb-6">Magnus</span>
      </div>
      <div class="  h-full mr-35 text-white  flex justify-end mr-1.5 p- py-3 bg-gray-600 hover:bg-gray-700 active:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300">
        <Link to={"/"} className="text-decoration-none text">
          <div
            className="  text-white flex justify-between gap-1.5 p-1"
            onClick={logoutFn}
          >
            <RiLogoutBoxRLine className="text-xl" /> <p>Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
