import React, { useEffect, useState } from "react";
import "./slider.css";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { FaHome } from "react-icons/fa";
import { AppContext } from "../layout/contex/AppContex";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

function Slider() {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);
  const [input, setInput] = useState();
  const [value, setValue] = useState(input);

  const handleInput = (event) => {
    setInput(Math.ceil(event.target.value));
    setValue(Math.ceil(event.target.value));
  };

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Slider
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / Slider
              </h1>
            </div>
            <hr className="text-black" />

            <div className="h-[50%] m-4 border-solid border-1 border-gray-600 text-white p-4 bg-gray-900">
              <Tabs defaultActiveKey="Slider" id="tab-example" className="mb-3">
                <Tab eventKey="Slider" title="Slider">
                  <Tooltip title={`current value : ${value}`} arrow>
                    <Button className="w-[80%]">
                      <input
                        id="pi_input"
                        type="range"
                        min="0"
                        max="100"
                        step="any"
                        onChange={handleInput}
                        className="text-gray-900 w-full"
                      />
                    </Button>
                  </Tooltip>

                  <p className="m-6">
                    Value:{" "}
                    <output id="value" value={value}>
                      {value}
                    </output>
                  </p>
                </Tab>
              </Tabs>
            </div>

            <div className="relative  my-52 mb-0 text-center bg-red-300 text-black">
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
}

export default Slider;
