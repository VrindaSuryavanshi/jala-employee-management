import React, { useState } from "react";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaHome } from "react-icons/fa";
import { AppContext } from "../layout/contex/AppContex";

const CSS_Properties = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  return (
    <div className="w-full h-screen overscroll-none">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-white-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              CSS-Properties
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / CSS-Properties{" "}
              </h1>
            </div>
            <hr className="text-black" />
            <div className="h-[50%] m-4 border-solid border-1 border-gray-300 text-white p-4 bg-gray-300">
              <Tabs
                defaultActiveKey="Links"
                id="tab-example"
                className="mb-3  "
              >
                <Tab eventKey="Links" title="Links">
                  <div className="flex flex-row  gap-4 p-20">
                    <a
                      href="http://www.growictech.com/"
                      style={{ color: "red" }}
                      target="_blank"
                    >
                      Link 1
                    </a>
                    <a
                      href="https://www.linkedin.com/uas/login"
                      style={{ color: "blue" }}
                      target="_blank"
                    >
                      Link 2
                    </a>
                    <a
                      href="https://www.google.co.in/"
                      style={{ color: "green" }}
                      target="_blank"
                    >
                      Link 3
                    </a>
                    <a
                      href="https://www.growictech.com:2096/"
                      style={{ color: "orange" }}
                      target="_blank"
                    >
                      Link 4
                    </a>
                    <a
                      href="http://www.restapitutorial.com/httpstatuscodes.html"
                      style={{ color: "indigo" }}
                      target="_blank"
                    >
                      Link 5
                    </a>
                  </div>
                </Tab>

                <Tab eventKey="Labels" title="Labels">
                  <div className="flex flex-row  gap-4 p-20">
                    <span className="text-xs font-semibold inline-block py-1 px-2   rounded text-blueGray-600 bg-gray-500   last:mr-0 mr-1">
                      Default
                    </span>

                    <span className="text-xs font-semibold inline-block py-1 px-2   rounded text-lightBlue-600 bg-blue-600   last:mr-0 mr-1">
                      Primary
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-white bg-emerald-600   last:mr-0 mr-1">
                      Success
                    </span>
                    <span className="text-xs font-semibold inline-block py-1 px-2   rounded text-white bg-teal-500   last:mr-0 mr-1">
                      Info
                    </span>

                    <span className="text-xs font-semibold inline-block py-1 px-2   rounded text-white bg-orange-500   last:mr-0 mr-1">
                      Warning
                    </span>

                    <span className="text-xs font-semibold inline-block py-1 px-2   rounded text-white bg-red-500   last:mr-0 mr-1">
                      Danger
                    </span>
                  </div>
                </Tab>

                <Tab eventKey="Buttons" title="Buttons">
                  <div className="flex flex-row  gap-4 p-20">
                    <button
                      className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Primary
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Success
                    </button>

                    <button
                      className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Warning
                    </button>
                    <button
                      className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Danger
                    </button>
                    <button
                      className="bg-blueGray-500 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Default
                    </button>
                  </div>
                </Tab>

                <Tab eventKey="Alerts" title="Alerts">
                  <div className="flex flex-column w-[70%] gap-4 p-4 text-white border-0 rounded relative ">
                    <div
                      className="alert alert-primary alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Info! </strong> Indicates a neutral informative
                      change or action.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div
                      className="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Success! </strong> Indicates a successful or
                      positive action.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div
                      className="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Warning !</strong> Indicates a warning that might
                      need attention.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div
                      className="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>Danger!</strong> Indicates a dangerous or
                      potentially negative action.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </div>
                </Tab>

                <Tab eventKey="Progress Bars" title="Progress Bars">
                  <div className="my-10">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Success example"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-success"
                        style={{ width: "25%" }}
                      >
                        25%
                      </div>
                    </div>
                    <br />
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Info example"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-info text-dark"
                        style={{ width: "50%" }}
                      >
                        50%
                      </div>
                    </div>
                    <br />
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Warning example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-warning text-dark"
                        style={{ width: "75%" }}
                      >
                        75%
                      </div>
                    </div>
                    <br />
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Danger example"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar bg-danger"
                        style={{ width: "100%" }}
                      >
                        100%
                      </div>
                    </div>
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

export default CSS_Properties;
