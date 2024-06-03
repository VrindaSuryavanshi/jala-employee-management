import React, { useState } from "react";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaHome } from "react-icons/fa";

import { AppContext } from "../layout/contex/AppContex";

const Links = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Links
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / Links{" "}
              </h1>
            </div>
            <hr className="text-black" />
            <div className="h-[50%] m-4 border-solid border-1 border-gray-400 text-white p-4 bg-gray-900">
              <Tabs
                defaultActiveKey="Working Links"
                id="tab-example"
                className="mb-3"
              >
                <Tab eventKey="Working Links" title="Working Links">
                  <div className="flex flex-row  gap-4 p-20">
                    <a
                      href="https://www.workinglinks.co.uk/"
                      className="text-red-600"
                    >
                      link 1
                    </a>
                    <a
                      href="https://www.google.co.in/"
                      className="text-blue-600"
                    >
                      link 2
                    </a>
                    <a
                      href="https://jalatechnologies.com/"
                      className="text-green-700"
                    >
                      link 3
                    </a>
                  </div>
                </Tab>

                <Tab eventKey="Broken Links" title="Broken Links">
                  <div className="flex flex-row  gap-4 p-20">
                    <a
                      href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/"
                      className="text-red-600"
                    >
                      link 1
                    </a>
                    <a
                      href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/"
                      className="text-blue-600"
                    >
                      link 2
                    </a>
                    <a
                      href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/"
                      className="text-green-700"
                    >
                      link 3
                    </a>
                  </div>
                </Tab>

                <Tab eventKey="Image Links" title="Image Links">
                  <div className="flex flex-row  gap-4 p-20">
                    <a
                      href="http://www.growictech.com/"
                      className="text-red-600"
                    >
                      <img
                        src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWL_70JdBWS5eJE0dkbtizctUFO3id5tE83k6rZfZHA&"
                        className="w-200 h-100"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/feed/"
                      className="text-blue-600"
                    >
                      <img
                        src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw"
                        className="w-200 h-100"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.google.co.in/"
                      className="text-green-700"
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrruTMg0EO25M4oHPszTzUtxCeT0cPW5SgF--8wdRig&s"
                        className="w-200 h-100"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://jalatechnologies.com/"
                      className="text-green-700"
                    >
                      <img
                        src="https://jalaacademy.com/assets/images/logo.png"
                        className="w-200 h-100"
                        alt=""
                      />
                    </a>
                  </div>
                </Tab>

                <Tab eventKey="Status Codes" title=" Status Codes">
                  <div className="flex flex-row  gap-4 p-20">
                    <a
                      href="http://www.restapitutorial.com/httpstatuscodes.html"
                      className="text-green-700"
                    >
                      200
                    </a>
                    <a
                      href="https://magnus.jalatechnologies.com/ErrorHandler/RedirectPermanently"
                      className="text-blue-600"
                    >
                      301
                    </a>
                    <a
                      href="https://magnus.jalatechnologies.com/ErrorHandler/NotFound"
                      className="text-red-700"
                    >
                      404
                    </a>
                    <a
                      href="https://magnus.jalatechnologies.com/ErrorHandler/InternalServerError"
                      className="text-red-500"
                    >
                      501
                    </a>
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className="relative h-52 text-center text-black">
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

export default Links;
