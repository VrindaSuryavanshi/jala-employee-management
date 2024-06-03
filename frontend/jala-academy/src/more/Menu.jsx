import React, { useEffect, useState } from "react";
import "../pages/home/home.css";
import "./menu.css";
import Header from "../layout/Header";
import { AppContext } from "../layout/contex/AppContex";
import Sidebar from "../layout/Sidebar";
import { FaHome } from "react-icons/fa";

const Menu = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  window.onload = function () {
    var ul = document.querySelector("#subm1");

    function getEventTarget(e) {
      e = e || window.event;
      return e.target || e.srcElement;
    }

    ul.onclick = function (event) {
      var target = getEventTarget(event);
      document.getElementById("selectedValue").innerText = target.innerHTML;
    };

    document.querySelector("#subm2").onclick = function (event) {
      var target = getEventTarget(event);
      document.getElementById("selectedValue").innerText = target.innerHTML;
    };
    document.querySelector("#subm3").onclick = function (event) {
      var target = getEventTarget(event);
      document.getElementById("selectedValue").innerText = target.innerHTML;
    };
    document.querySelector("#subm4").onclick = function (event) {
      var target = getEventTarget(event);
      document.getElementById("selectedValue").innerText = target.innerHTML;
    };
    document.querySelector("#subm5").onclick = function (event) {
      var target = getEventTarget(event);
      document.getElementById("selectedValue").innerText = target.innerHTML;
    };
    //   var subul =document.getElementById('subm3')

    //   subul.onclick = function(event) {
    //     var target = getEventTarget(event);
    //   // alert(target.innerHTML);
    //     console.log(target.innerHTML)
    //     document.getElementById("selectedValue").innerText =target.innerHTML;
    // };
  };

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Menu
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / Menu{" "}
              </h1>
            </div>
            <hr className="text-black" />
            <div className="m-4 h-72  border-solid border-1 border-gray-600 text-white p-4 bg-gray-900">
              <nav>
                <ul className="menu grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 text-black">
                  <li className="bg-sky-400 text-center">
                    Single Menus
                    <ul className="submenu sm1" id="subm1">
                      <li>Testing </li>
                      <li> Java </li>
                      <li> .Net </li>
                      <li> Database </li>
                    </ul>
                  </li>

                  <li className="bg-sky-400 text-center">
                    Sub Menus
                    <ul className="submenu">
                      <li>
                        Testing
                        <ul className="submenu2" id="subm2">
                          <li> Selenium </li>
                          <li> Manual Testing </li>
                          <li> DB testing </li>
                          <li> Unit Testing </li>
                        </ul>
                      </li>

                      <li>
                        Java
                        <ul className="submenu2" id="subm3">
                          <li> Core java </li>
                          <li> Adv Java </li>
                          <li> Spring </li>
                          <li> HiberNate </li>
                        </ul>
                      </li>
                      <li>
                        .Net
                        <ul className="submenu2" id="subm4">
                          <li> C# </li>
                          <li> Java </li>
                          <li> Asp.Net </li>
                          <li> MVC </li>
                        </ul>
                      </li>
                      <li>
                        Database
                        <ul className="submenu2" id="subm5">
                          <li> Sql </li>
                          <li> My Sql </li>
                          <li> Oracle </li>
                          <li> H2 </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="grid grid-cols-2 gap-10 content-between text-center text-green-900">
              <div></div>
              <div className="flex gap-2">
                <h6>Your selected value is : </h6>{" "}
                <h6 className="text-green-900 mr-10" id="selectedValue">
                  Not selcted
                </h6>
              </div>
            </div>
            <div className="relative  my-72 mb-0 text-center bg-red-300 text-black">
              <div className="absolute inset-x-0 bottom-0  ...">
                Copyright © 2024{" "}
                <a className="text-blue-600" href="http://jalatechnologies.com">
                  {" "}
                  JALA Technologies
                </a>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default Menu;
