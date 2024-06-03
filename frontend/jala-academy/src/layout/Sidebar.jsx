import React, { useState, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { IoCreateSharp, IoSearchCircleSharp } from "react-icons/io5";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { AppContext } from "./contex/AppContex";
import "../../src/input.css";
import "../pages/home/home.css";
const Sidebar = () => {
  const menu = [
    {
      title: "Home",
      icon: FaHome,
      link: "/home",
      subitems: [],
    },
    {
      title: "Employee",
      icon: FaUsersLine,
      // link: "/",
      subitems: [
        {
          title: "Create",
          icon: IoCreateSharp,
          link: "/create",
          subitems: [],
        },
        {
          title: "Search",
          icon: IoSearchCircleSharp,
          link: "/search",
          subitems: [],
        },
      ],
    },
    {
      title: "More",
      icon: BsMenuButtonWideFill,
      // link: "/",
      subitems: [
        {
          title: "Multiple Tabs",
          icon: FaHandPointRight,
          link: "/mutiple-tabs",
          subitems: [],
        },
        {
          title: "Menu",
          icon: FaHandPointRight,
          link: "/menu",
          subitems: [],
        },
        {
          title: "AutoComplete",
          icon: FaHandPointRight,
          link: "/autocomplete",
          subitems: [],
        },
        {
          title: "Collapsible Content",
          icon: FaHandPointRight,
          link: "/collapsible",
          subitems: [],
        },
        {
          title: "Images",
          icon: FaHandPointRight,
          link: "/images",
          subitems: [],
        },
        {
          title: "Slider",
          icon: FaHandPointRight,
          link: "/slider",
          subitems: [],
        },
        {
          title: "Tooltips",
          icon: FaHandPointRight,
          link: "/tooltips",
          subitems: [],
        },
        {
          title: "Popups",
          icon: FaHandPointRight,
          link: "/popups",
          subitems: [],
        },
        {
          title: "Links",
          icon: FaHandPointRight,
          link: "/links",
          subitems: [],
        },
        {
          title: "CSS Properties",
          icon: FaHandPointRight,
          link: "/css-properties",
          subitems: [],
        },
        {
          title: "iFrames",
          icon: FaHandPointRight,
          link: "/iframes",
          subitems: [],
        },
      ],
    },
    {
      title: "Settings",
      icon: FiSettings,
      link: "#",
      subitems: [],
    },
  ];

  const [activable, setActivable] = useState(menu[0].title);
  const [collapse, setCollapse] = useState(null);

  const setToggler = (val) => {
    if (collapse == val) {
      setCollapse(null);
    } else {
      setCollapse(val);
    }
  };
  const { appData, setAppData } = useContext(AppContext);

  return (
    <div
      className={`${
        appData.sidebarVisible ? "w-[230px]" : "w-[0px]"
      }  md:h-ful transition-all duration-200 linear duration-900 flex-shrink-0 bg-gray-800 text-white border-r border-r-[#888]`}
    >
      <div className="m-4 flex flex-row">
        <div>
          <img
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            alt=""
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className=" my-4 mx-2 flex flex-col">
          <h6>Guest User</h6>
          <small>User</small>
        </div>
      </div>
      <ul className="mt-2 list-none">
        {menu.map((x) => {
          if (x.subitems.length > 0) {
            // render submenu
            return (
              <li className="w-full px-2 my-1 ml-1 text-gray-300">
                <a
                  href={x.link}
                  onClick={() => setToggler(x.title)}
                  className=" text-decoration-none text-decoration-none p-2 my-2 mt-2 px-2  text-white flex  justify-between items-center hover:bg-gray-700 rounded-md group "
                >
                  <span className="left flex items-center group-hover:text-white">
                    {React.createElement(x.icon)}
                    <p className="ml-2 my-2 ">{x.title}</p>
                  </span>

                  <span className="right items-center">
                    <IoMdArrowDropdownCircle />
                  </span>
                </a>

                {/* ================Submenu =================*/}
                <ul
                  className={`${
                    collapse === x.title ? "" : "hidden"
                  } bg-gray-600 rounded-md  transition duration-1000`}
                >
                  {x.subitems.map((y) => {
                    return (
                      <li className="w-full py-1 text-gray-300">
                        <a
                          href={y.link}
                          onClick={() => {
                            setActivable(y.title);
                          }}
                          className={`text-decoration-none  text-white flex  justify-between items-center hover:bg-gray-700  ${
                            activable === y.title ? "bg-gray-700" : ""
                          }`}
                        >
                          <span className="left flex items-center ml-2">
                            {React.createElement(y.icon)}
                            <p className="ml-4 my-2">{y.title}</p>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          } else {
            //render items
            return (
              <li className="w-full px-2 py-1 text-gray-300">
                <a
                  href={x.link}
                  onClick={() => {
                    setActivable(x.title);
                  }}
                  className={`text-decoration-none p-2 my-2 mt-2 px-2 text-white flex   justify-between items-center hover:bg-gray-700 rounded-md ${
                    activable === x.title ? "bg-gray-700" : ""
                  } group`}
                >
                  <span className="left flex items-center group-hover:text-white">
                    {React.createElement(x.icon)}
                    <p className="ml-3 my-2">{x.title}</p>
                  </span>
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
